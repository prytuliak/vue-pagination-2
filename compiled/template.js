'use strict';

module.exports = function () {

  return function (h) {

    var theme = this.Theme;
    var items = [];
    var prevChunk = '';
    var nextChunk = '';
    var firstPage = '';
    var lastPage = '';

    if (this.opts.edgeNavigation && this.totalChunks >= 1) {
      firstPage = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === 1 ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk' },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: this.page === 1
            },
            on: {
              'click': this.setPage.bind(this, 1)
            }
          },
          [this.opts.texts.first]
        )]
      );

      lastPage = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === this.totalPages ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk' },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: this.page === this.totalPages
            },
            on: {
              'click': this.setPage.bind(this, this.totalPages)
            }
          },
          [this.opts.texts.last]
        )]
      );
    }

    if (this.opts.chunksNavigation === 'fixed') {

      prevChunk = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-chunk ' + this.allowedChunkClass(-1) },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: !!this.allowedChunkClass(-1)
            },
            on: {
              'click': this.setChunk.bind(this, -1)
            }
          },
          ['<<']
        )]
      );

      nextChunk = h(
        'li',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-chunk ' + this.allowedChunkClass(1) },
        [h(
          'a',
          { 'class': theme.link,
            attrs: { href: 'javascript:void(0);',
              disabled: !!this.allowedChunkClass(1)
            },
            on: {
              'click': this.setChunk.bind(this, 1)
            }
          },
          ['>>']
        )]
      );
    }
    if (this.totalPages <= 10) {
      for (var i = 1; i <= this.totalPages; i++) {
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(i) },
          [h(
            'a',
            {
              'class': theme.link + ' ' + this.activeClass(i),
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              },
              on: {
                'click': this.setPage.bind(this, i)
              }
            },
            [i]
          )]
        ));
      }
    }
    if (this.totalPages > 10) {
      if (this.page < 7) {
        for (var i = 1; i <= 8; i++) {
          items.push(h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(i) },
            [h(
              'a',
              {
                'class': theme.link + ' ' + this.activeClass(i),
                attrs: {
                  href: 'javascript:void(0)',
                  role: 'button'
                },
                on: {
                  'click': this.setPage.bind(this, i)
                }
              },
              [i]
            )]
          ));
        }
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              }
            },
            ['...']
          )]
        ));
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' + theme.item },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              },
              on: {
                'click': this.setPage.bind(this, this.totalPages)
              }
            },
            [this.totalPages]
          )]
        ));

      }
      if (this.page >= 7 && this.page <= this.totalPages - 6) {
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' + theme.item },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              },
              on: {
                'click': this.setPage.bind(this, this.firstPage)
              }
            },
            [this.firstPage]
          )]
        ));
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              }
            },
            ['...']
          )]
        ));

        for (var i = this.page - 2; i <= this.page + 2; i++) {
          items.push(h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(i) },
            [h(
              'a',
              {
                'class': theme.link + ' ' + this.activeClass(i),
                attrs: {
                  href: 'javascript:void(0)',
                  role: 'button'
                },
                on: {
                  'click': this.setPage.bind(this, i)
                }
              },
              [i]
            )]
          ));
        }

        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              }
            },
            ['...']
          )]
        ));
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' + theme.item },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              },
              on: {
                'click': this.setPage.bind(this, this.totalPages)
              }
            },
            [this.totalPages]
          )]
        ));
      }
      if (this.page > this.totalPages - 6) {
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' + theme.item },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              },
              on: {
                'click': this.setPage.bind(this, this.firstPage)
              }
            },
            [this.firstPage]
          )]
        ));
        items.push(h(
          'li',
          { 'class': 'VuePagination__pagination-item ' },
          [h(
            'a',
            {
              'class': theme.link,
              attrs: {
                href: 'javascript:void(0)',
                role: 'button'
              }
            },
            ['...']
          )]
        ));
        for (var i = this.totalPages - 7; i <= this.totalPages; i++) {
          items.push(h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(i) },
            [h(
              'a',
              {
                'class': theme.link + ' ' + this.activeClass(i),
                attrs: {
                  href: 'javascript:void(0)',
                  role: 'button'
                },
                on: {
                  'click': this.setPage.bind(this, i)
                }
              },
              [i]
            )]
          ));
        }
      }
    }
    return h(
      'div',
      { 'class': 'VuePagination ' + theme.wrapper },
      [h(
        'nav',
        { 'class': '' + theme.nav },
        [h(
          'ul',
          {
            directives: [{
              name: 'show',
              value: this.totalPages > 1
            }],

            'class': theme.list + ' VuePagination__pagination' },
          [prevChunk, h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-page ' + this.allowedPageClass(this.page - 1) },
            [h(
              'a',
              { 'class': theme.link,
                attrs: { href: 'javascript:void(0);',
                  disabled: !!this.allowedPageClass(this.page - 1)
                },
                on: {
                  'click': this.prev.bind(this)
                }
              },
              ['<']
            )]
          ), firstPage, items, lastPage, h(
            'li',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-page ' + this.allowedPageClass(this.page + 1) },
            [h(
              'a',
              { 'class': theme.link,
                attrs: { href: 'javascript:void(0);',
                  disabled: !!this.allowedPageClass(this.page + 1)
                },
                on: {
                  'click': this.next.bind(this)
                }
              },
              ['>']
            )]
          ), nextChunk]
        ), h(
          'p',
          {
            directives: [{
              name: 'show',
              value: parseInt(this.records)
            }],

            'class': 'VuePagination__count ' + theme.count },
          [this.count]
        )]
      )]
    );
  };
};
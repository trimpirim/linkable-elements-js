/**
 * LinkableObject jquery plugin
 */
(function($) {
  /**
   * Separate class for jquery linkableObject plugin
   */
  class LinkableObject {
    /**
     * Creates a LinkableObject
     * @param  {$jqueryElement} element 
     * @param  {Object} options Options object
     */
    constructor(element, options = {}) {
      if ($(element).length > 0) {
        this.jqElement = $(element)
        this.element = $(element)[0]
        this.catchClickEvents()
      }
    }

    /**
     * Catches click events on jquery elements
     */
    catchClickEvents() {
      this.jqElement.on('click', function(ev) {
        const url = $(this).data('url');
        if (typeof url !== 'undefined') {
          window.location = url;
        }
      });
    }
  }

  /**
   * Creates jquery plugin linkableObject
   * Usage: $('.div').linkableObject()
   *  HTML:
   *    <div class="div" data-url="http://some-osom-url.com">Click here to be redirected</div>
   * @param  {Object} options Options passed to jquery plugin. E.g.: .linkableObject({}). There are not options available right now.
   */
  $.fn.linkableObject = function(options) {
    let settings = $.extend({

    }, options)

    return this.each(function() {
      return new LinkableObject($(this), settings)
    })
  }
})(jQuery)
/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/better_exposed_filters/js/better_exposed_filters.js. */
(function($,Drupal,drupalSettings){Drupal.behaviors.betterExposedFilters={attach:function(context,settings){$('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]').change(function(){_bef_highlight(this,context)}).filter(':checked').closest('.form-item',context).addClass('highlight')}}
function _bef_highlight(elem,context){$elem=$(elem,context);$elem.attr('checked')?$elem.closest('.form-item',context).addClass('highlight'):$elem.closest('.form-item',context).removeClass('highlight')}})(jQuery,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/better_exposed_filters/js/better_exposed_filters.js. */
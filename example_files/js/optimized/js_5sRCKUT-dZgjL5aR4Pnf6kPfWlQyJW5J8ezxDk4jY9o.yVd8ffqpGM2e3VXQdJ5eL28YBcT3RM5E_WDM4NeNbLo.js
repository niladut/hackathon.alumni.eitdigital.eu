/* Source and licensing information for the line(s) below can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/module_filter/js/module_filter.permissions.js. */
(function($){'use strict';Drupal.behaviors.moduleFilterPermissions={attach:function(context){var $input=$('input.table-filter-text',context).once('module-filter');if($input.length){var wrapperId=$input.attr('data-table'),selector='tbody tr',lastModuleItem;$(wrapperId).parent().prepend($input.closest('.table-filter'));$input.winnow(wrapperId+' '+selector,{textSelector:'td.module',buildIndex:[function(item){item.isModule=item.text!='';if(item.isModule){item.children=[];lastModuleItem=item}else{item.parent=lastModuleItem;lastModuleItem.children.push(item)};return item}],additionalOperators:{perm:function(string,item){if(!item.isModule){if(item.permission==undefined)item.permission=$('.permission .title',item.element).text().toLowerCase();if(item.permission.indexOf(string)>=0)return true}}}});var winnow=$input.data('winnow');$input.bind('winnow:finish',function(){if(winnow.results.length>0)for(var i in winnow.results)if(winnow.results[i].isModule){for(var k in winnow.results[i].children)winnow.results[i].children[k].element.show()}else winnow.results[i].parent.element.show()})}}}})(jQuery)
/* Source and licensing information for the above line(s) can be found at http://hackathondigitalumni.docker.localhost:8000/modules/contrib/module_filter/js/module_filter.permissions.js. */
/* Source and licensing information for the line(s) below can be found at http://alumni.docker.localhost:8000/modules/contrib/webform/js/webform.element.message.js. */
(function($,Drupal){'use strict';Drupal.behaviors.webformMessageClose={attach:function(context){$(context).find('.js-webform-message--close').once('webform-message--close').each(function(){var $element=$(this),id=$element.attr('data-message-id'),storage=$element.attr('data-message-storage'),effect=$element.attr('data-message-close-effect')||'hide';switch(effect){case'slide':effect='slideUp';break;case'fade':effect='fadeOut';break};if(isClosed($element,storage,id))return;if($element.attr('style')!=='display: none;')$element.show();$element.find('.js-webform-message__link').on('click',function(event){$element[effect]();setClosed($element,storage,id);$element.trigger('close');event.preventDefault()})})}}
function isClosed($element,storage,id){if(!id||!storage)return false;switch(storage){case'local':if(window.localStorage)return localStorage.getItem('Drupal.webform.message.'+id)||false;return false;case'session':if(window.sessionStorage)return sessionStorage.getItem('Drupal.webform.message.'+id)||false;return false;default:return false}}
function setClosed($element,storage,id){if(!id||!storage)return;switch(storage){case'local':if(window.localStorage)localStorage.setItem('Drupal.webform.message.'+id,true);break;case'session':if(window.sessionStorage)sessionStorage.setItem('Drupal.webform.message.'+id,true);break;case'user':case'state':case'custom':$.get($element.find('.js-webform-message__link').attr('href'));return true}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at http://alumni.docker.localhost:8000/modules/contrib/webform/js/webform.element.message.js. */
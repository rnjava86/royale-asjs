/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//TODO Should implment IUIBase
goog.provide('org.apache.flex.core.graphics.GraphicShape');

goog.require('org.apache.flex.core.graphics.SolidColor');
goog.require('org.apache.flex.core.graphics.SolidColorStroke');


/**
 * @constructor
 */
org.apache.flex.core.graphics.GraphicShape = function() {

  /**
   * @private
   * @type {org.apache.flex.core.graphics.SolidColor}
   */
  this.fill_ = null;
  
  /**
   * @private
   * @type {org.apache.flex.core.graphics.SolidColorStroke}
   */
  this.stroke_ = null;
  
    /**
   * @expose
   */
  this.element = document.createElementNS("http://www.w3.org/2000/svg","svg");

  
};

/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.graphics.GraphicShape.prototype.FLEXJS_CLASS_INFO =
    { names: [{ name: 'GraphicShape',
                qName: 'org.apache.flex.core.graphics.GraphicShape' }] };



/**
 * @expose
 * @return {org.apache.flex.core.graphics.SolidColor} The fill object.
 */
org.apache.flex.core.graphics.GraphicShape.prototype.get_fill = function() {
  return this.fill_;
};

/**
 * @param {org.apache.flex.core.graphics.SolidColor} value The fill object.
 */
org.apache.flex.core.graphics.GraphicShape.prototype.set_fill = function(value) {
  this.fill_ = value;
};

/**
 * @expose
 * @return {org.apache.flex.core.graphics.SolidColorStroke} The stroke object.
 */
org.apache.flex.core.graphics.GraphicShape.prototype.get_stroke = function() {
  return this.stroke_;
};

/**
 * @expose
 * @param {org.apache.flex.core.graphics.SolidColorStroke} value The stroke object.
 */
org.apache.flex.core.graphics.GraphicShape.prototype.set_stroke = function(value) {
  this.stroke_ = value;
};

org.apache.flex.core.graphics.GraphicShape.prototype.addedToParent = function() {
  //Don't do anything
};


/**
 * @expose
 * return {String} The style attribute
 */
org.apache.flex.core.graphics.GraphicShape.prototype.getStyleStr = function() {
  var color = Number(this.get_fill().get_color()).toString(16);
  if (color.length == 2) color = '00' + color;
  if (color.length == 4) color = '00' + color;
  var strokeColor = Number(this.get_stroke().get_color()).toString(16);
  if (strokeColor.length == 2) strokeColor = '00' + strokeColor;
  if (strokeColor.length == 4) strokeColor = '00' + strokeColor;

  return 'fill:#' + String(color) + ';stroke:#'+ String(strokeColor) + ';stroke-width:' + String(this.get_stroke().get_weight()) + ';fill-opacity:' + String(this.get_fill().get_alpha()) ;
};

/**
 * @expose
 * @param {number} x X position
 * @param {number} y Y position
 * @param {number} w Width
 * @param {number} h Height
 */
org.apache.flex.core.graphics.GraphicShape.prototype.resize = function(x,y,w,h) {
  this.element.setAttribute("width", String(w) + "px");
  this.element.setAttribute("height", String(h) + "px");
  this.element.setAttribute("style", "position:absolute; left:" + String(x) + "px; top:" + String(y) + "px;");
};


import { D as DF, $ as $F, C as CI, W as WF } from './maplibre-FyRPtSC5.js';

true              &&(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
}());

const workerUrl = "/assets/maplibre-gl-worker-BUkb9VjC.js";

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const createElement = (tag, attrs, children = []) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children.length) {
    children.forEach((child) => {
      const childElement = createElement(...child);
      element.appendChild(childElement);
    });
  }
  return element;
};
var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
  attrs[attr.name] = attr.value;
  return attrs;
}, {});
const getClassNames = (attrs) => {
  if (typeof attrs === "string")
    return attrs;
  if (!attrs || !attrs.class)
    return "";
  if (attrs.class && typeof attrs.class === "string") {
    return attrs.class.split(" ");
  }
  if (attrs.class && Array.isArray(attrs.class)) {
    return attrs.class;
  }
  return "";
};
const combineClassNames = (arrayOfClassnames) => {
  const classNameArray = arrayOfClassnames.flatMap(getClassNames);
  return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self) => self.indexOf(value) === index).join(" ");
};
const toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
const replaceElement = (element, { nameAttr, icons, attrs }) => {
  const iconName = element.getAttribute(nameAttr);
  if (iconName == null)
    return;
  const ComponentName = toPascalCase(iconName);
  const iconNode = icons[ComponentName];
  if (!iconNode) {
    return console.warn(
      `${element.outerHTML} icon name was not found in the provided icons object.`
    );
  }
  const elementAttrs = getAttrs(element);
  const [tag, iconAttributes, children] = iconNode;
  const iconAttrs = {
    ...iconAttributes,
    "data-lucide": iconName,
    ...attrs,
    ...elementAttrs
  };
  const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
  if (classNames) {
    Object.assign(iconAttrs, {
      class: classNames
    });
  }
  const svgElement = createElement$1([tag, iconAttrs, children]);
  return element.parentNode?.replaceChild(svgElement, element);
};

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Waves = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ],
    [
      "path",
      {
        d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ],
    [
      "path",
      {
        d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Fish = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
      }
    ],
    ["path", { d: "M18 12v.5" }],
    ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }],
    [
      "path",
      {
        d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
      }
    ],
    ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }],
    ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const FishSymbol = [
  "svg",
  defaultAttributes,
  [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const BookOpen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 7v14" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const LocateFixed = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
    ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
    ["circle", { cx: "12", cy: "12", r: "7" }],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Scan = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Layers = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
      }
    ],
    ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }],
    ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Map$1 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
      }
    ],
    ["path", { d: "M15 5.764v15" }],
    ["path", { d: "M9 3.236v15" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronDown = ["svg", defaultAttributes, [["path", { d: "m6 9 6 6 6-6" }]]];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Compass = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const CalendarDays = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 14h.01" }],
    ["path", { d: "M12 14h.01" }],
    ["path", { d: "M16 14h.01" }],
    ["path", { d: "M8 18h.01" }],
    ["path", { d: "M12 18h.01" }],
    ["path", { d: "M16 18h.01" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Bookmark = [
  "svg",
  defaultAttributes,
  [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }]]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Calendar = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const SlidersHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "21", x2: "14", y1: "4", y2: "4" }],
    ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }],
    ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }],
    ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }],
    ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }],
    ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }],
    ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }],
    ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
    ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Navigation = [
  "svg",
  defaultAttributes,
  [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const RefreshCw = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }],
    ["path", { d: "M21 3v5h-5" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }],
    ["path", { d: "M8 16H3v5" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowUpRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 7h10v10" }],
    ["path", { d: "M7 17 17 7" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const X = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 12h14" }],
    ["path", { d: "m12 5 7 7-7 7" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const MapPinOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16" }],
    [
      "path",
      {
        d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
      }
    ],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }],
    ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronRight = ["svg", defaultAttributes, [["path", { d: "m9 18 6-6-6-6" }]]];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Sprout = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 20h10" }],
    ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10" }],
    [
      "path",
      {
        d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
      }
    ],
    [
      "path",
      { d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" }
    ]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Microscope = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 18h8" }],
    ["path", { d: "M3 22h18" }],
    ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }],
    ["path", { d: "M9 14h2" }],
    ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }],
    ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Share2 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "5", r: "3" }],
    ["circle", { cx: "6", cy: "12", r: "3" }],
    ["circle", { cx: "18", cy: "19", r: "3" }],
    ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }],
    ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ExternalLink = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 3h6v6" }],
    ["path", { d: "M10 14 21 3" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Download = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["polyline", { points: "7 10 12 15 17 10" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3" }]
  ]
];

/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Trash2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }]
  ]
];

// Lucide ISC icons, imported individually to keep builds bounded.
function createIcons({icons,attrs={}}){for(const element of document.querySelectorAll('[data-lucide]'))replaceElement(element,{nameAttr:'data-lucide',icons,attrs});}

const DAY=86400000;
const EVIDENCE_SINCE='2000-01-01';
const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Chicago',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const kinds={'image-derived':'Image-derived location','occurrence':'Citizen-science observation','survey':'Biological observation','angler':'Angler catch','stocking-site':'Stocking location','stocking':'Stocking event'};
function distance(a,b){const rad=Math.PI/180;const x=(b.lat-a.lat)*rad,y=(b.lon-a.lon)*rad;return 6371*2*Math.asin(Math.sqrt(Math.sin(x/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(y/2)**2));}
function dateRange(r){if(!r.date)return null;const [start,end]=r.date.split('/');return [start.slice(0,10), (end||start).slice(0,10)];}
function knownMonth(r){return r.month??(r.date&&!r.date.includes('/')?Number(r.date.slice(5,7)):null);}
function filterRecords(records,f){return records.filter(r=>{
 if(r.species!==f.species)return false;
 if(r.type!=='image-derived'&&!r.type.startsWith('stocking')&&(!r.date||r.date.slice(0,10)<EVIDENCE_SINCE))return false;
 if(f.source&&r.source!==f.source)return false;
 if(f.type&&r.type!==f.type)return false;
 if(f.near&&(!f.location||distance(r,f.location)>Number(f.radius||25)))return false;
 const range=dateRange(r);const dated=!!range;
 if(f.start&&(!dated||range[1]<f.start))return false;
 if(f.end&&(!dated||range[0]>f.end))return false;
 if(f.season){const wanted=f.season.split(',').map(Number),m=knownMonth(r);if(r.type==='image-derived'){if(!r.seasonMonths?.some(x=>wanted.includes(x)))return false;}else if(!m||!wanted.includes(m))return false;}
 if(f.recency!=='all'&&f.recency){if(!dated)return false;const cutoff=new Date(new Date(f.asOf+'T12:00:00Z')-90*DAY).toISOString().slice(0,10);if(f.recency==='recent'&&range[0]<cutoff)return false;if(f.recency==='historical'&&range[1]>=cutoff)return false;}
 if(f.stockDays){if(r.type!=='stocking'||!dated||r.date.includes('/'))return false;const age=(new Date(f.asOf)-new Date(range[0]))/DAY;if(age<0||age>Number(f.stockDays))return false;}
 for(const [key,min,max] of [['waterTemp',f.tempMin,f.tempMax]]){if(min!==''&&min!=null||max!==''&&max!=null){const v=r.environment?.[key];if(v==null||!Number.isFinite(Number(v)))return false;if(min!==''&&min!=null&&Number(v)<Number(min))return false;if(max!==''&&max!=null&&Number(v)>Number(max))return false;}}
 return true;
});}
function eligibleAt(r,date){const range=dateRange(r);return range&&range[0]>=EVIDENCE_SINCE&&range[1]<=date&&!['stocking-site'].includes(r.type);}
function seasonalDistance(a,b){return Math.min(Math.abs(a-b),12-Math.abs(a-b));}
function hotspots(records,{species,asOf,environment={},planning=false}){
 const size=species==='trout'?0.008:0.025;const buckets=new Map();
 for(const r of records){if(!eligibleAt(r,asOf)||r.species!==species)continue;
 const key=`${Math.floor(r.lon/size)},${Math.floor(r.lat/size)}`;
 if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(r);}
 const month=Number(asOf.slice(5,7));
 return [...buckets.entries()].map(([id,rs])=>{
 const lat=rs.reduce((s,r)=>s+r.lat,0)/rs.length,lon=rs.reduce((s,r)=>s+r.lon,0)/rs.length;
 // Multiple fish in one tow never become independent catches.
 const events=new Set(rs.map(r=>r.eventId)).size;
 const seasons=new Set(rs.map(r=>r.year).filter(Boolean)).size;
 const recent=rs.filter(r=>{const [a,b]=dateRange(r);return a===b&&(new Date(asOf)-new Date(b))/DAY<=90;}).length;
 const same=rs.filter(r=>knownMonth(r)&&seasonalDistance(knownMonth(r),month)<=1).length;
 const precise=rs.filter(r=>r.uncertainty!=null&&r.uncertainty<=500).length;
 const seasonalBase=species==='trout'?([11,12,1,2,3].includes(month)?12:2):10;
 const parts=[['Independent sampling events',Math.min(25,Math.round(Math.log2(events+1)*5))],['Repeated across years',Math.min(10,seasons*2)],['Within 90 days',Math.min(20,recent*5)],['Similar time of year',Math.round(same/rs.length*20)],['Reported precision ≤500 m',Math.round(precise/rs.length*5)],['Seasonal prior (heuristic)',seasonalBase]];
 const freshStock=rs.some(r=>r.type==='stocking'&&!r.date.includes('/')&&(new Date(asOf)-new Date(dateRange(r)[0]))/DAY<=30);
 if(freshStock)parts.push(['Dated stocking ≤30 days',15]);
 const t=environment.waterTemp?.value;
 if(Number.isFinite(t)&&(!planning||environment.waterTemp?.date?.slice(0,10)===asOf))parts.push(['Station water temperature context',species==='trout'?(t<20?3:-12):(t>=16&&t<=30?3:-3)]);
 let score=Math.max(0,Math.min(100,parts.reduce((s,p)=>s+p[1],0)));
 // Historical evidence cannot establish today's stocked trout presence.
 if(species==='trout'&&!freshStock)score=Math.min(score,35);
 if(!recent&&!freshStock)score=Math.min(score,65);
 const age=Math.floor((new Date(asOf)-new Date(rs.map(r=>dateRange(r)[1]).sort().at(-1)))/DAY);
 const uncertainty=Math.max(...rs.map(r=>r.uncertainty||0));
 return {id:`hot-${id}`,lat,lon,score,records:rs,events,seasons,parts,recent,age,uncertainty:uncertainty||null,radius:Math.max(species==='trout'?550:1500,uncertainty),name:areaName(lat,lon,species),confidence:recent?'Limited recent evidence':'Historical evidence only',cap:species==='trout'&&!freshStock?'Score capped at 35: no verified recent stocking.':!recent?'Score capped at 65: no recent observations.':null};
 }).sort((a,b)=>b.score-a.score||b.events-a.events);
}
function areaName(lat,lon,species){if(species==='trout')return lat>29.85?'Canyon tailrace':lat>29.80?'River Road reach':'Lower Guadalupe reach';return lat<27.94?'Redfish Bay':lon< -97.08?'Rockport shoreline':lat>28.10?'St. Charles / upper bay':'Aransas Bay';}
function circleFeature(center,meters,props={}){const coords=[];for(let i=0;i<=64;i++){const a=i/64*Math.PI*2;coords.push([center.lon+Math.cos(a)*meters/(111320*Math.cos(center.lat*Math.PI/180)),center.lat+Math.sin(a)*meters/111320]);}return {type:'Feature',properties:props,geometry:{type:'Polygon',coordinates:[coords]}};}
const featureCollection=features=>({type:'FeatureCollection',features});

function parseCSV(text){const rows=[];let row=[],field='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){field+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(field);field='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(field);if(row.some(x=>x!==''))rows.push(row);row=[];field='';}else field+=c;}if(quoted)throw Error('Unclosed CSV quote');row.push(field);if(row.some(x=>x!==''))rows.push(row);const headers=rows.shift();if(!headers)return [];return rows.map(r=>Object.fromEntries(headers.map((k,i)=>[k,r[i]||''])));}

function normalizePersonal(row,index=0){
 const labels={'trout':'trout','rainbow trout':'trout','oncorhynchus mykiss':'trout','redfish':'redfish','red drum':'redfish','sciaenops ocellatus':'redfish'};
 const species=labels[String(row.species||row.fish_species||row['fish species']||'').toLowerCase()];if(!species)throw Error(`Row ${index+1}: species must be trout or redfish.`);
 const date=row.date||row.observed_on;if(!/^\d{4}-\d{2}-\d{2}$/.test(date||'')||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date)throw Error(`Row ${index+1}: use a valid YYYY-MM-DD date.`);
 if(date<EVIDENCE_SINCE||date>today())throw Error(`Row ${index+1}: catch dates must be 2000 or later and no later than today.`);
 const latRaw=row.latitude??row.lat,lonRaw=row.longitude??row.lon;const lat=Number(latRaw),lon=Number(lonRaw);
 if(latRaw==null||lonRaw==null||latRaw===''||lonRaw===''||!Number.isFinite(lat)||!Number.isFinite(lon)||lat< -90||lat>90||lon< -180||lon>180)throw Error(`Row ${index+1}: valid latitude and longitude required.`);
 const rawU=row.uncertainty_m??row.uncertainty;const uncertainty=rawU==null||rawU===''?null:Number(rawU);if(uncertainty!=null&&(!Number.isFinite(uncertainty)||uncertainty<=0))throw Error(`Row ${index+1}: uncertainty_m must be positive or blank.`);
 const type=['angler','survey','occurrence','stocking'].includes(row.record_type||row.type)?(row.record_type||row.type):'occurrence';
 const token=String(row.id||`${species}-${date}-${lat}-${lon}`).slice(0,120).replace(/^personal-/, '');
 return {id:'personal-'+token,species,scientificName:species==='trout'?'Oncorhynchus mykiss':'Sciaenops ocellatus',type,source:'personal',sourceName:String(row.source_name||'Your private records').slice(0,120),date,month:Number(date.slice(5,7)),year:Number(date.slice(0,4)),lat,lon,uncertainty,precision:uncertainty==null?'Not recorded; coordinates do not imply GPS accuracy':'Your supplied uncertainty',name:String(row.name||row.location||'Personal catch').slice(0,120),url:null,method:type==='angler'?'Personal angler catch record':type==='stocking'?'Private dated stocking record':'Private database observation; collection method unspecified',eventId:'personal-'+String(row.event_id||token).slice(0,120),license:'Private personal data; not redistributed',creator:'You',count:null,environment:{}};
}
function parsePersonal(text,format){let rows;if(format==='csv')rows=parseCSV(text);else {const j=JSON.parse(text);rows=Array.isArray(j)?j:j.records;}if(!Array.isArray(rows)||rows.length===0)throw Error('The file contains no catch rows.');if(rows.length>2000)throw Error('Import at most 2,000 rows at a time.');return rows.map(normalizePersonal);}
function mergePersonal(current,added){return [...new Map([...current,...added].map(r=>[r.id,r])).values()];}

async function getJSON(url){const r=await fetch(url,{signal:AbortSignal.timeout(14000)});if(!r.ok)throw Error(`HTTP ${r.status}`);return r.json();}
const FLOW_KEY='river-reed-last-flow-v1';
function savedFlow(){try{const value=JSON.parse(localStorage.getItem(FLOW_KEY)||'null');if(value&&Number.isFinite(value.value)&&value.value>=0&&Number.isFinite(Date.parse(value.date))&&Date.parse(value.date)<=Date.now()+3600000)return {...value,kind:'Saved observation'};}catch{}return null;}
async function loadEnvironment(species,date){
 const output={errors:[],station:species==='trout'?'USGS 08167800 · Sattler':'NOAA 8774770 · Rockport',url:species==='trout'?'https://waterdata.usgs.gov/monitoring-location/USGS-08167800/':'https://tidesandcurrents.noaa.gov/stationhome.html?id=8774770'};
 if(species==='trout'){
 if(globalThis.navigator?.onLine===false){output.savedFlow=savedFlow();output.errors.push('Offline: live station updates unavailable.');return output;}
 try{const j=await getJSON('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08167800&parameterCd=00060,00010&period=P1D');for(const s of j.value.timeSeries){const v=s.values[0].value.filter(v=>Number(v.value)!==Number(s.variable.noDataValue)).at(-1);if(!v)continue;const key=s.variable.variableCode[0].value==='00060'?'flow':'waterTemp';output[key]={value:Number(v.value),unit:key==='flow'?'cfs':'°C',date:v.dateTime,kind:'Current observation'};}}catch{output.errors.push('USGS station unavailable. Try refreshing.');}
 }else {
 const base='https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?'+new URLSearchParams({application:'RiverAndReed',station:'8774770',units:'english',time_zone:'gmt',format:'json'});
 await Promise.all(['wind','water_temperature','predictions'].map(async product=>{try{const prediction=product==='predictions';const q=prediction?`&product=predictions&begin_date=${date.replaceAll('-','')}&end_date=${date.replaceAll('-','')}&datum=MLLW&interval=h`:`&product=${product}&date=latest`;const j=await getJSON(base+q);if(j.error)throw Error(j.error.message);
 if(prediction){const values=j.predictions.map(v=>({value:Number(v.v),date:v.t+'Z'}));if(!values.length)throw Error('No predictions');output.tide={values,value:Math.max(...values.map(v=>v.value))-Math.min(...values.map(v=>v.value)),unit:'ft daily range',date,kind:'Astronomical tide prediction'};}
 else {const d=j.data?.at(-1);if(!d)throw Error('No observation');if(product==='wind')output.wind={value:Number(d.s),direction:d.dr,unit:'kn',date:d.t.replace(' ','T')+'Z',kind:'Current observation'};else output.waterTemp={value:(Number(d.v)-32)*5/9,unit:'°C',date:d.t.replace(' ','T')+'Z',kind:'Current observation'};}
 }catch{output.errors.push(`${product.replace('_',' ')} unavailable at Rockport.`);}}));
 }
 // Never silently use old station values in a score.
 for(const key of ['flow','waterTemp','wind'])if(output[key]){const age=(Date.now()-new Date(output[key].date))/3600000;if(age>6||age< -1){output.errors.push(`${key} observation is stale; omitted.`);delete output[key];}}
 if(species==='trout'){if(output.flow){try{localStorage.setItem(FLOW_KEY,JSON.stringify(output.flow));}catch{}}else output.savedFlow=savedFlow();}
 output.future=date>today();return output;
}

// This style has no remote tiles, sprites or glyphs. MapLibre uses local fonts.
const RIVER_BOUNDS=[-98.215,29.79,-98.13,29.895];
function inRiverCoverage({lon,lat}){return lon>=RIVER_BOUNDS[0]&&lon<=RIVER_BOUNDS[2]&&lat>=RIVER_BOUNDS[1]&&lat<=RIVER_BOUNDS[3];}
function riverStyle(dark=false,data={type:'FeatureCollection',features:[]}){const color=dark?{bg:'#24352f',green:'#30483b',water:'#385d66',road:'#9baca2',text:'#eef0df',halo:'#24352f'}:{bg:'#f0f0e7',green:'#dce5d3',water:'#abcbd0',road:'#fffdf6',text:'#3e574e',halo:'#f0f0e7'};return {version:8,sources:{'river-basemap':{type:'geojson',data,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a> · ODbL'}},layers:[
{id:'river-background',type:'background',paint:{'background-color':color.bg}},
{id:'river-green',type:'fill',source:'river-basemap',filter:['==',['get','kind'],'green'],paint:{'fill-color':color.green}},
{id:'river-water',type:'fill',source:'river-basemap',filter:['==',['get','kind'],'water'],paint:{'fill-color':color.water}},
{id:'river-streams',type:'line',source:'river-basemap',filter:['==',['get','kind'],'river'],paint:{'line-color':color.water,'line-width':['interpolate',['linear'],['zoom'],10,1,15,5]}},
{id:'river-road-casing',type:'line',source:'river-basemap',filter:['==',['get','kind'],'road'],paint:{'line-color':dark?'#42594c':'#c8cfc2','line-width':['interpolate',['linear'],['zoom'],10,1.2,15,5]}},
{id:'river-roads',type:'line',source:'river-basemap',filter:['==',['get','kind'],'road'],paint:{'line-color':color.road,'line-width':['interpolate',['linear'],['zoom'],10,.5,15,3.5]}},
{id:'river-road-labels',type:'symbol',source:'river-basemap',minzoom:12,filter:['all',['==',['get','kind'],'road'],['!=',['get','name'],'']],layout:{'symbol-placement':'line','text-field':['get','name'],'text-font':['Arial'],'text-size':10,'symbol-spacing':250},paint:{'text-color':color.text,'text-halo-color':color.halo,'text-halo-width':1.2}},
{id:'river-place-labels',type:'symbol',source:'river-basemap',filter:['==',['get','kind'],'place'],layout:{'text-field':['get','name'],'text-font':['Arial'],'text-size':13},paint:{'text-color':color.text,'text-halo-color':color.halo,'text-halo-width':1.5}}
]};}

const PACK_PREFIX='river-reed-trip-v1-';
const PACK_MARKER='/offline-ready.json';
const CORE_URLS=['/','/manifest.webmanifest','/apple-touch-icon.png','/icon.svg','/data/seed.json','/data/guad-image-points.json','/data/guad-river.geojson','/data/guad-offline-map.geojson','/data/stocking-status.json'];
async function getOfflinePack(){
 if(!('caches' in globalThis))return null;
 const found=[];for(const name of await caches.keys()){if(!name.startsWith(PACK_PREFIX))continue;const cache=await caches.open(name),marker=await cache.match(PACK_MARKER);if(!marker)continue;try{const info=await marker.json();if(info.urls?.length&& (await Promise.all(info.urls.map(url=>cache.match(url)))).every(Boolean))found.push({...info,cacheName:name});}catch{}}
 return found.sort((a,b)=>b.savedAt.localeCompare(a.savedAt))[0]||null;
}
async function saveOfflinePack(onProgress=()=>{}){
 if(!navigator.onLine)throw Error('Connect to Wi-Fi or cellular service before saving.');
 if(!('serviceWorker' in navigator)||!('caches' in globalThis))throw Error('Offline storage is unavailable in this browser.');
 const registration=await Promise.race([navigator.serviceWorker.ready,new Promise((_,reject)=>setTimeout(()=>reject(Error('Offline preparation is unavailable. Reload while connected, then retry.')),12000))]);
 if(!registration.active)throw Error('The app is still preparing. Wait a moment and retry.');
 const compatible=await new Promise(resolve=>{const channel=new MessageChannel(),timer=setTimeout(()=>{channel.port1.close();resolve(false);},4000);channel.port1.onmessage=e=>{clearTimeout(timer);channel.port1.close();resolve(e.data?.version>=4);};registration.active.postMessage({type:'TRIP_CACHE_SUPPORTED'},[channel.port2]);});
 if(!compatible)throw Error('The offline update is still preparing. Reload the map while connected, then save again.');
 const manifest=await fetch('/asset-manifest.json',{cache:'no-store'});if(!manifest.ok)throw Error('Could not load the download list.');
 const assets=await manifest.json();if(!Array.isArray(assets)||!assets.length||assets.some(x=>typeof x!=='string'||!x.startsWith('/assets/')))throw Error('The download list is invalid.');
 const urls=[...CORE_URLS,...assets];const cacheName=PACK_PREFIX+Date.now();const cache=await caches.open(cacheName);let bytes=0;
 try{for(let i=0;i<urls.length;i++){const response=await fetch(urls[i],{cache:'reload',signal:AbortSignal.timeout(20000)});if(!response.ok||response.type==='opaque')throw Error('A map file could not download. Retry on a reliable connection.');const blob=await response.clone().arrayBuffer();bytes+=blob.byteLength;await cache.put(urls[i],response);onProgress(i+1,urls.length);}
 const info={savedAt:new Date().toISOString(),urls,bytes,coverage:'Guadalupe below Canyon Dam to south of Sattler',bounds:[-98.215,29.79,-98.13,29.895]};await cache.put(PACK_MARKER,new Response(JSON.stringify(info),{headers:{'Content-Type':'application/json'}}));
 const verified=await getOfflinePack();if(verified?.cacheName!==cacheName)throw Error('The download could not be verified. Retry.');
 let persistent=false;try{persistent=await navigator.storage?.persist?.()||false;}catch{}
 // Delete only older complete trip bundles, after the replacement has verified.
 for(const name of await caches.keys())if(name.startsWith(PACK_PREFIX)&&name!==cacheName)await caches.delete(name);
 return {...info,cacheName,persistent};
 }catch(error){await caches.delete(cacheName);throw error;}
}

CI(workerUrl);
const icons = { Waves, Fish, FishSymbol, BookOpen, LocateFixed, Scan, Layers, Map: Map$1, ChevronDown, Compass, CalendarDays, Bookmark, Calendar, SlidersHorizontal, Navigation, RefreshCw, ArrowUpRight, X, ArrowRight, MapPinOff, ChevronRight, Sprout, Microscope, Share2, ExternalLink, Download, Trash2 };
const $ = (s) => document.querySelector(s);
const escape = (s) => String(s ?? "Unknown").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const svg = (n, extra = "") => `<i data-lucide="${n}" ${extra}></i>`;
const redrawIcons = () => createIcons({ icons, attrs: { "aria-hidden": "true" } });
const fmtDate = (d) => {
  if (!d) return "Date not supplied";
  if (d.includes("/")) {
    const [a, b] = d.split("/");
    if (a.endsWith("-01-01") && b.endsWith("-12-31") && a.slice(0, 4) === b.slice(0, 4)) return `${a.slice(0, 4)} \xB7 year only`;
    return `${a.slice(0, 10)} \u2013 ${b.slice(0, 10)}`;
  }
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(d.length === 10 ? d + "T12:00:00Z" : d));
};
const personalKey = "river-reed-personal-v1";
let personal = [];
try {
  personal = JSON.parse(localStorage.getItem(personalKey) || "[]");
  if (!Array.isArray(personal)) personal = [];
} catch {
}
const personalSource = { id: "personal", name: "Your private catch journal", license: "Private personal data; not redistributed", citation: "User-supplied records stored only in this browser.", url: null };
const savedKey = "river-reed-trips-v1";
let saved = [];
try {
  saved = JSON.parse(localStorage.getItem(savedKey) || "[]");
  if (!Array.isArray(saved)) saved = [];
} catch {
}
const state = { species: "trout", date: today(), mode: "explore", layer: "hotspots", filters: { recency: "all" }, near: false, location: null, watch: null, radius: 25, env: {}, records: [], sources: [], hot: [], visible: [], ready: false, basemap: "light", envRequest: 0, heatmap: true, stocking: null, offlinePack: null, offlineBusy: false, offlineProgress: "", offlineError: "" };
let map, positionMarker, toastTimer, selected;
let riverBasemap = { type: "FeatureCollection", features: [] }, riverLine = { type: "FeatureCollection", features: [] };
window.addEventListener("resize", () => requestAnimationFrame(() => map?.resize()));
function toast(text) {
  $("#toast").textContent = text;
  $("#toast").hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").hidden = true, 5e3);
}
function getFilters() {
  return { ...state.filters, species: state.species, asOf: state.date, near: state.near, location: state.location, radius: state.radius };
}
function environmentPass() {
  const f = state.filters, e = state.env;
  for (const [key, metric, op] of [["flowMin", "flow", "min"], ["flowMax", "flow", "max"], ["stationTempMin", "waterTemp", "min"], ["stationTempMax", "waterTemp", "max"], ["windMax", "wind", "max"], ["tideMin", "tide", "min"]]) {
    if (f[key] === "" || f[key] == null) continue;
    if (metric !== "tide" && state.date !== today()) return false;
    const value = e[metric]?.value;
    if (value == null || !Number.isFinite(value)) return false;
    if (op === "min" && value < Number(f[key]) || op === "max" && value > Number(f[key])) return false;
  }
  return true;
}
function compute() {
  state.visible = environmentPass() ? filterRecords(state.records, getFilters()) : [];
  state.hot = hotspots(state.visible, { species: state.species, asOf: state.date, environment: state.date === today() ? state.env : {}, planning: state.mode === "plan" });
  if (state.near && state.location) state.hot.sort((a, b) => distance(a, state.location) - distance(b, state.location));
}
function persist() {
  try {
    localStorage.setItem(savedKey, JSON.stringify(saved));
  } catch {
    toast("This browser could not save the trip. Export it to keep a copy.");
  }
  $("#save-count").textContent = saved.length;
}
function fitRegion() {
  if (!map) return;
  map.resize();
  map.setPadding({ top: 0, bottom: 0, left: 0, right: 0 });
  const imageRows = state.records.filter((r) => r.source === "user-image-guad");
  if (state.filters.source === "user-image-guad" && imageRows.length) {
    map.fitBounds([[Math.min(...imageRows.map((r) => r.lon)) - 2e-3, Math.min(...imageRows.map((r) => r.lat)) - 2e-3], [Math.max(...imageRows.map((r) => r.lon)) + 2e-3, Math.max(...imageRows.map((r) => r.lat)) + 2e-3]], { padding: window.innerWidth <= 760 ? { top: 65, bottom: window.innerHeight * (state.species === "trout" ? 0.36 : 0.44), left: 35, right: 35 } : 65, duration: 650, retainPadding: false });
    return;
  }
  const b = state.species === "trout" ? [[-98.235, 29.735], [-98.095, 29.89]] : [[-97.245, 27.82], [-96.82, 28.19]];
  map.fitBounds(b, { padding: window.innerWidth <= 760 ? { top: 65, bottom: window.innerHeight * (state.species === "trout" ? 0.36 : 0.44), left: 35, right: 35 } : 65, duration: 650, retainPadding: false });
}
function mapStyle() {
  return state.species === "trout" ? riverStyle(state.basemap === "dark", riverBasemap) : "https://tiles.openfreemap.org/styles/" + (state.basemap === "dark" ? "dark" : "positron");
}
function paintMap() {
  if (!state.ready) return;
  const points = featureCollection(state.visible.map((r) => ({ type: "Feature", geometry: { type: "Point", coordinates: [r.lon, r.lat] }, properties: { id: r.id, type: r.type } })));
  map.getSource("records")?.setData(points);
  map.getSource("dot-records")?.setData(points);
  $("#map").dataset.dotCount = state.visible.filter((r) => !r.type.startsWith("stocking")).length;
  const unique = [...new Map(state.visible.filter((r) => !r.type.startsWith("stocking")).map((r) => [r.eventId, r])).values()];
  map.getSource("density")?.setData(featureCollection(unique.map((r) => ({ type: "Feature", geometry: { type: "Point", coordinates: [r.lon, r.lat] }, properties: { weight: r.uncertainty == null ? 0.5 : r.uncertainty > 1e3 ? 0.25 : 1 } }))));
  map.getSource("areas")?.setData(featureCollection(state.hot.map((h) => circleFeature(h, h.radius, { id: h.id, score: h.score }))));
  map.getSource("area-centers")?.setData(featureCollection(state.hot.map((h) => ({ type: "Feature", properties: { id: h.id, score: h.score }, geometry: { type: "Point", coordinates: [h.lon, h.lat] } }))));
}
function addLayers() {
  map.getSource("river-basemap")?.setData(riverBasemap);
  map.addSource("records", { type: "geojson", data: featureCollection([]), cluster: true, clusterRadius: 30, clusterMaxZoom: 13 });
  map.addSource("dot-records", { type: "geojson", data: featureCollection([]) });
  map.addSource("density", { type: "geojson", data: featureCollection([]) });
  map.addSource("river-centerline", { type: "geojson", data: riverLine });
  map.addLayer({ id: "river-centerline", type: "line", source: "river-centerline", layout: { visibility: state.species === "trout" ? "visible" : "none" }, paint: { "line-color": "#8bb7c2", "line-width": 2.2, "line-opacity": 0.8 } });
  map.addSource("areas", { type: "geojson", data: featureCollection([]) });
  map.addSource("area-centers", { type: "geojson", data: featureCollection([]) });
  map.addSource("selection", { type: "geojson", data: featureCollection([]) });
  map.addLayer({ id: "density", type: "heatmap", source: "density", layout: { visibility: state.heatmap ? "visible" : "none" }, paint: { "heatmap-weight": ["get", "weight"], "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 8, 0.25, 12, 1.15, 14, 1.6, 17, 2.1], "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 8, 9, 12, 13, 14, 18, 17, 25], "heatmap-opacity": 0.7, "heatmap-color": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(255,226,138,0)", 0.08, "#ffe28a", 0.35, "#f8bf34", 0.65, "#f48622", 0.87, "#e74a28", 1, "#bc2b21"] } });
  map.addLayer({ id: "areas-fill", type: "fill", source: "areas", paint: { "fill-color": "#76518a", "fill-opacity": 0.13 } });
  map.addLayer({ id: "areas-line", type: "line", source: "areas", paint: { "line-color": "#76518a", "line-width": 1.3, "line-dasharray": [3, 2] } });
  map.addLayer({ id: "area-centers", type: "circle", source: "area-centers", paint: { "circle-radius": 4, "circle-color": "#76518a", "circle-stroke-width": 2, "circle-stroke-color": "#fffdf7", "circle-opacity": 0.85 } });
  map.addLayer({ id: "clusters", type: "circle", source: "records", filter: ["has", "point_count"], paint: { "circle-color": "#e5eee2", "circle-radius": ["step", ["get", "point_count"], 11, 20, 14, 100, 18], "circle-stroke-color": "#3d7466", "circle-stroke-width": 1.5 } });
  map.addLayer({ id: "cluster-count", type: "symbol", source: "records", filter: ["has", "point_count"], layout: { "text-field": ["get", "point_count_abbreviated"], "text-font": ["Noto Sans Regular"], "text-size": 10 }, paint: { "text-color": "#173e37" } });
  for (const [name, color, shape] of [["image-derived", "#2c947a", "circle"], ["occurrence", "#246b8d", "circle"], ["survey", "#246b8d", "circle"], ["angler", "#173e37", "diamond"], ["stocking-site", "#b6542a", "square"], ["stocking", "#b6542a", "square"]]) {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.strokeStyle = "#fffdf7";
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (shape === "circle") ctx.arc(16, 16, 9, 0, Math.PI * 2);
    else if (shape === "square") ctx.rect(7, 7, 18, 18);
    else {
      ctx.moveTo(16, 3);
      ctx.lineTo(29, 16);
      ctx.lineTo(16, 29);
      ctx.lineTo(3, 16);
      ctx.closePath();
    }
    ctx.fill();
    ctx.stroke();
    map.addImage(name, ctx.getImageData(0, 0, 32, 32));
  }
  map.addLayer({ id: "observations", type: "symbol", source: "records", filter: ["!", ["has", "point_count"]], layout: { "icon-image": ["get", "type"], "icon-size": 0.75, "icon-allow-overlap": true } });
  map.addLayer({ id: "evidence-dots", type: "circle", source: "dot-records", filter: ["!", ["in", ["get", "type"], ["literal", ["stocking", "stocking-site"]]]], paint: { "circle-radius": 14, "circle-color": ["match", ["get", "type"], "image-derived", "#2c947a", "angler", "#173e37", "#246b8d"], "circle-stroke-color": ["match", ["get", "type"], "image-derived", "#76518a", "#fffdf7"], "circle-stroke-width": 0, "circle-opacity": 0 } });
  map.addLayer({ id: "stocking-points", type: "symbol", source: "dot-records", filter: ["in", ["get", "type"], ["literal", ["stocking", "stocking-site"]]], layout: { "icon-image": ["get", "type"], "icon-size": 0.75, "icon-allow-overlap": true } });
  map.addLayer({ id: "selection-fill", type: "fill", source: "selection", paint: { "fill-color": "#b6542a", "fill-opacity": 0.09 } });
  map.addLayer({ id: "selection-line", type: "line", source: "selection", paint: { "line-color": "#b6542a", "line-width": 2 } });
  state.ready = true;
  setHeatmap(state.heatmap);
  paintMap();
}
function setHeatmap(on) {
  state.heatmap = on;
  const button = $("#heatmap-toggle");
  button.setAttribute("aria-pressed", on);
  button.setAttribute("aria-label", on ? "Show modeled areas and clustered records" : "Show density heatmap");
  button.classList.toggle("tracking", on);
  $("#heatmap-legend").hidden = !on;
  $("#density-key").hidden = !on;
  $("#map").dataset.view = on ? "heatmap" : "modeled-areas";
  if (!state.ready) return;
  for (const id of ["density", "evidence-dots"]) map.setLayoutProperty(id, "visibility", on ? "visible" : "none");
  map.setLayoutProperty("stocking-points", "visibility", "none");
  for (const id of ["areas-fill", "areas-line", "area-centers", "clusters", "cluster-count", "observations"]) map.setLayoutProperty(id, "visibility", on ? "none" : "visible");
}
function initMap() {
  try {
    map = new DF({ container: "map", style: mapStyle(), center: [-98.178, 29.85], zoom: 11, attributionControl: { compact: true }, maxZoom: 18, trackResize: false });
    map.addControl(new $F({ unit: "metric" }), "bottom-left");
    map.on("load", () => {
      if (!map.getSource("records")) addLayers();
      fitRegion();
    });
    map.on("style.load", () => {
      if (!map.getSource("records")) addLayers();
    });
    map.on("movestart", () => {
      delete $("#map").dataset.rendered;
    });
    map.on("idle", () => {
      $("#map").dataset.rendered = "true";
      $("#map").dataset.style = state.basemap;
      $("#map").dataset.baseLabels = map.getLayer("river-place-labels") ? map.queryRenderedFeatures({ layers: ["river-place-labels", "river-road-labels"] }).length : 0;
      $("#map").dataset.baseFeatures = map.getLayer("river-roads") ? map.queryRenderedFeatures({ layers: ["river-roads"] }).length : 0;
      $("#map").dataset.basemap = state.species === "trout" ? "local-river" : "online-coast";
      if (map.getLayer("evidence-dots")) $("#map").dataset.imageInView = map.queryRenderedFeatures({ layers: ["evidence-dots"] }).filter((f) => f.properties.type === "image-derived").length;
    });
    map.on("error", (e) => {
      if (e.error?.message?.includes("WebGL")) {
        $("#map-error").hidden = false;
        $("#map-error").textContent = "Map graphics are unavailable in this browser. Explore the same evidence in the list below.";
      }
    });
    map.on("click", async (e) => {
      const hits = map.queryRenderedFeatures(e.point, { layers: ["evidence-dots", "stocking-points", "observations", "clusters", "area-centers", "areas-fill"].filter((id) => map.getLayer(id)) });
      if (!hits.length) return;
      const hit = hits[0];
      if (state.heatmap && hit.properties.id) {
        const r = state.visible.find((r2) => r2.id === hit.properties.id);
        if (r) {
          showDensity(r);
          return;
        }
      }
      if (hit.properties.cluster_id != null) {
        const zoom = await map.getSource("records").getClusterExpansionZoom(hit.properties.cluster_id);
        map.easeTo({ center: hit.geometry.coordinates, zoom });
        return;
      }
      if (hit.properties.id?.startsWith("hot-")) showHot(hit.properties.id);
      else showRecord(hit.properties.id);
    });
    for (const l of ["evidence-dots", "stocking-points", "observations", "clusters", "area-centers", "areas-fill"]) {
      map.on("mouseenter", l, () => map.getCanvas().style.cursor = "pointer");
      map.on("mouseleave", l, () => map.getCanvas().style.cursor = "");
    }
  } catch {
    $("#map-error").hidden = false;
    $("#map-error").textContent = "Map could not start. The evidence list and planning tools remain available.";
  }
}
function renderTroutSummary() {
  const target = $("#trout-summary");
  if (!target) return;
  const rows = state.visible.filter((r) => !r.type.startsWith("stocking"));
  const liveFlow = state.env.station?.includes("USGS") ? state.env.flow : null;
  const flow = liveFlow || state.env.savedFlow;
  const offline = navigator.onLine === false;
  const stock = state.stocking;
  target.innerHTML = `<header class="river-title"><h1>Guadalupe River</h1><span>Below Canyon Dam</span></header><section class="river-heat"><h2>Heatmap data</h2><p><strong>${rows.length} locations</strong> \xB7 December\u2013February</p><p class="river-muted">Screenshot year unknown \xB7 snapped to the river. Yellow is sparse; red is denser. Source uncertainty: 350\u2013450 m.</p><div class="offline-save"><button id="save-offline" ${state.offlineBusy ? "disabled" : ""}>${svg("download")} ${state.offlineBusy ? "Saving\u2026" : state.offlinePack ? "Update offline map" : "Save map for offline"}</button><p id="offline-status" role="status">${state.offlineBusy ? escape(state.offlineProgress) : state.offlineError ? escape(state.offlineError) : state.offlinePack ? `Saved on this phone \xB7 ${(state.offlinePack.bytes / 1048576).toFixed(1)} MB \xB7 ${escape(fmtDate(state.offlinePack.savedAt))}` : "Save on each phone while connected, before leaving."}</p><p class="river-muted">Offline area: Canyon Dam through Sattler to south of the image heatmap. Roads, river, labels &amp; heat included. Open once in airplane mode to check.</p></div></section><section class="river-flow"><div class="river-section-title"><h2>River flow${!liveFlow && flow ? " \xB7 saved" : ""}</h2><button id="river-refresh" aria-label="Refresh river flow">${svg("refresh-cw")}</button></div><div class="river-flow-value">${flow ? escape(Math.round(flow.value).toLocaleString()) : "\u2014"} <small>cfs</small></div><p class="river-muted">${flow ? `${liveFlow ? "Observed" : "Saved reading \xB7 observed"} ${escape(new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short", timeZone: "America/Chicago" }).format(new Date(flow.date)))}` : "No saved reading available. Reconnect to refresh."}</p><a href="https://waterdata.usgs.gov/monitoring-location/USGS-08167800/" target="_blank" rel="noopener">USGS 08167800 \xB7 Sattler ${svg("arrow-up-right")}</a></section><section class="river-stocking"><h2>Stocking information${offline ? " \xB7 saved" : ""}</h2>${stock && !stock.unavailable ? `<p><strong>2026\u201327 schedule not yet verified</strong></p><p class="river-muted">TPWD page checked October 19, 2026. It still lists the 2025\u201326 season.</p><a href="${escape(stock.scheduleUrl)}" target="_blank" rel="noopener">Check the official TPWD schedule ${svg("arrow-up-right")}</a><details><summary>Previous season &amp; stocking history</summary><p>2025\u201326 Canyon Tailrace schedule: ${stock.canyonTailraceScheduledDates.map((d) => escape(fmtDate(d))).join("; ")}.</p><p>${stock.scheduledSeasonTotal.toLocaleString()} fish scheduled across that season. Scheduled dates do not confirm actual releases.</p><p>2026 stocking history: ${stock.reported2026AdultRainbowTotal.toLocaleString()} adult rainbow trout reported; individual release dates are not supplied.</p><a href="${escape(stock.historyUrl)}" target="_blank" rel="noopener">TPWD stocking history</a></details>` : `<p class="river-muted">${stock?.unavailable ? "Stocking information could not load." : "Loading stocking information\u2026"}</p><a href="https://tpwd.texas.gov/fishboat/fish/management/stocking/trout_stocking.phtml" target="_blank" rel="noopener">Official TPWD schedule</a>`}</section>`;
  $("#river-refresh").onclick = refreshEnvironment;
  $("#save-offline").onclick = downloadRiver;
  updateOfflineBadge();
  redrawIcons();
}
function updateOfflineBadge() {
  const badge = $("#offline-map-status");
  if (!badge) return;
  badge.hidden = state.species !== "trout";
  const away = state.location && !inRiverCoverage(state.location);
  badge.textContent = away ? "GPS is outside the downloaded river area" : navigator.onLine === false ? state.offlinePack ? "Offline \xB7 saved river map" : "Offline \xB7 map not verified on this phone" : "River map \xB7 offline capable";
  badge.classList.toggle("offline", navigator.onLine === false);
}
async function downloadRiver() {
  state.offlineBusy = true;
  state.offlineError = "";
  renderTroutSummary();
  try {
    state.offlinePack = await saveOfflinePack((done, total) => {
      state.offlineProgress = `Saving map files ${done} / ${total}`;
      const message = $("#offline-status");
      if (message) message.textContent = state.offlineProgress;
    });
    toast("River map saved on this phone. Test it once in airplane mode before your trip.");
  } catch (error) {
    state.offlineError = error.name === "QuotaExceededError" ? "Not enough phone storage. Free some space and retry." : error.message;
    state.offlinePack = await getOfflinePack();
  } finally {
    state.offlineBusy = false;
    renderTroutSummary();
  }
}
window.addEventListener("offline", () => {
  updateOfflineBadge();
  if (state.species === "trout") refreshEnvironment();
});
window.addEventListener("online", () => {
  updateOfflineBadge();
  refreshEnvironment();
});
getOfflinePack().then((pack) => {
  state.offlinePack = pack;
  renderTroutSummary();
}).catch(() => {
});
function showDensity(r) {
  const nearby = state.visible.filter((x) => !x.type.startsWith("stocking") && distance(x, r) <= 0.25);
  openDetail(detailHeader("Heatmap data", "Reported location density") + `<p>${nearby.length} source locations within 250 m of this part of the map.</p><p>Yellow marks sparse locations; orange and red mark denser groups. The heat is a smoothed view of reporting density, not current fish abundance or a catch forecast.</p><p>${r.type === "image-derived" ? "User-supplied screenshot \xB7 December\u2013February, year unknown. Display locations are snapped to the mapped river; original source uncertainty remains 350\u2013450 m." : "Source: " + escape(r.sourceName)}</p><button data-close="detail-dialog">Back to map</button>`);
}
function stationMarkup() {
  const e = state.env;
  const metrics = state.species === "trout" ? [["flow", "River flow", "cfs"], ["waterTemp", "Water temp", "\xB0C"]] : [["tide", "Tidal range", "ft"], ["wind", "Wind now", "kn"], ["waterTemp", "Water temp now", "\xB0C"]];
  let html = metrics.map(([k, label, unit]) => `<div class="condition"><strong>${e[k] ? escape(e[k].value.toFixed(k === "flow" ? 0 : 1)) : "\u2014"} <small>${e[k] ? unit : ""}</small></strong><label>${label}</label></div>`).join("");
  html += `<div class="condition-source"><span>${escape(e.station || "Public station inputs")}${e.future ? " \xB7 not a weather forecast" : ""}</span><button id="condition-details">Details</button></div>`;
  $("#conditions").innerHTML = html;
  $("#condition-details").onclick = showConditions;
}
async function refreshEnvironment() {
  const req = ++state.envRequest;
  $("#refresh").disabled = true;
  $("#conditions").textContent = "Loading public station inputs\u2026";
  const env = await loadEnvironment(state.species, state.date);
  if (req !== state.envRequest) return;
  state.env = env;
  $("#refresh").disabled = false;
  stationMarkup();
  render();
}
function countFilters() {
  return Object.entries(state.filters).filter(([k, v]) => v !== "" && v != null && !(k === "recency" && v === "all")).length;
}
function render() {
  compute();
  paintMap();
  document.body.classList.toggle("trout-view", state.species === "trout");
  if (map?.getLayer("river-centerline")) map.setLayoutProperty("river-centerline", "visibility", state.species === "trout" ? "visible" : "none");
  renderTroutSummary();
  $("#save-count").textContent = saved.length;
  const filterCount = countFilters();
  $("#filter-count").textContent = filterCount;
  $("#filter-count").hidden = !filterCount;
  $("#near-button").classList.toggle("active", state.near);
  $("#near-button").setAttribute("aria-pressed", state.near);
  $("#trip-date").value = state.date;
  $("#planning-note").hidden = state.mode !== "plan" && state.date <= today();
  $("#date-label").textContent = state.mode === "plan" ? "Your fishing day" : "Explore as of";
  for (const name of ["explore", "plan", "saved"]) {
    $(`#${name}-tab`).classList.toggle("active", state.mode === name);
    $(`#${name}-tab`).setAttribute("aria-pressed", state.mode === name);
  }
  $("#hotspots-tab").classList.toggle("active", state.layer === "hotspots");
  $("#observations-tab").classList.toggle("active", state.layer === "observations");
  $("#region-title").textContent = state.mode === "plan" ? "A little foresight. Better water." : state.mode === "saved" ? "Your days on the water." : "Find your next stretch.";
  $("#region-subtitle").textContent = state.species === "trout" ? "Guadalupe tailwater \xB7 trout and stocking evidence" : "Redfish water, with the evidence behind it.";
  const obs = state.visible.filter((r) => !r.type.startsWith("stocking"));
  const latest = obs.map((r) => dateRange(r)?.[1]).filter(Boolean).sort().at(-1);
  $("#coverage").textContent = state.species === "trout" ? `${obs.filter((r) => r.type !== "image-derived").length} dated trout observations; ${obs.filter((r) => r.type === "image-derived").length} approximate image pins (year unknown). No verified current-season stocking events loaded.` : "Historical agency sampling, not live catches. " + (latest ? `Newest filtered observation: ${fmtDate(latest)}.` : "No dated observations match.");
  $("#results-title").textContent = state.mode === "saved" ? "Saved trips" : state.layer === "hotspots" ? state.mode === "plan" ? "Seasonal opportunity areas" : "Water worth exploring" : "The observations behind it";
  const result = state.mode === "saved" ? saved.filter((x) => x.species === state.species) : state.layer === "hotspots" ? state.hot : state.visible;
  $("#results-count").textContent = `${result.length.toLocaleString()} ${state.mode === "saved" ? "trips" : state.layer === "hotspots" ? "areas" : "records"}`;
  if (!result.length) {
    $("#results").innerHTML = `<div class="empty">${svg(state.mode === "saved" ? "bookmark" : "map-pin-off")}<h3>${state.mode === "saved" ? "Room for your next trip." : "No matching evidence."}</h3><p>${state.mode === "saved" ? "Open an area or observation and save it with your chosen date." : !environmentPass() ? "Station conditions are missing or outside your filters. Change them to see evidence." : state.near ? "No evidence in this GPS radius. Expand the radius or turn off Near me." : "Try widening the dates, sources, or stocking window. An empty result does not mean no fish."}</p>${state.mode === "saved" ? "" : '<button id="clear-results">Clear filters</button>'}</div>`;
    $("#clear-results")?.addEventListener("click", clearFilters);
  } else if (state.mode === "saved") {
    $("#results").innerHTML = result.map((x) => `<button class="result" data-saved="${escape(x.key)}"><span class="score-marker ${x.score < 40 ? "low" : ""}">${x.score ?? "\u2022"}</span><span class="result-body"><h3>${escape(x.name)}</h3><p>${escape(fmtDate(x.date))} \xB7 ${x.species === "trout" ? "Guadalupe River" : "Texas coast"}</p><span class="type-tag">Saved on this device</span></span>${svg("chevron-right", 'class="result-arrow"')}</button>`).join("");
  } else if (state.layer === "hotspots") {
    $("#results").innerHTML = result.slice(0, 80).map((h) => `<button class="result" data-hot="${escape(h.id)}"><span class="score-marker ${h.score < 40 ? "low" : ""}">${h.score}</span><span class="result-body"><h3>${escape(h.name)}</h3><p>${h.events} evidence event${h.events === 1 ? "" : "s"} \xB7 ${h.seasons} year${h.seasons === 1 ? "" : "s"}${state.location ? ` \xB7 ${distance(h, state.location).toFixed(1)} km away` : ""}</p><span class="result-meta"><span class="type-tag historical">${h.recent ? "Some recent evidence" : "Historical evidence"}</span><span>${Math.round(h.radius)} m model radius</span></span></span>${svg("chevron-right", 'class="result-arrow"')}</button>`).join("");
  } else {
    $("#results").innerHTML = result.slice(0, 150).map((r) => `<button class="result" data-record="${escape(r.id)}"><span class="score-marker low">${svg(r.type.startsWith("stocking") ? "sprout" : r.type === "angler" ? "fish" : "microscope")}</span><span class="result-body"><h3>${escape(r.name)}</h3><p>${escape(fmtDate(r.date))} \xB7 ${escape(r.sourceName)}</p><span class="result-meta"><span class="type-tag">${escape(kinds[r.type])}</span><span>${r.uncertainty != null ? "\xB1 " + Math.round(r.uncertainty) + " m" : "Precision unknown"}</span></span></span>${svg("chevron-right", 'class="result-arrow"')}</button>`).join("") + (result.length > 150 ? '<p class="help">Showing the first 150 records in the list. All filtered points appear on the map. Narrow filters to explore more.</p>' : "");
  }
  redrawIcons();
}
function panTo(item) {
  if (!map) return;
  map.flyTo({ center: [item.lon, item.lat], zoom: state.species === "trout" ? 13 : 12, duration: 800 });
  if (state.ready) map.getSource("selection").setData(featureCollection([circleFeature(item, item.radius || item.uncertainty || 200)]));
}
function openDetail(html) {
  $("#detail-content").innerHTML = html;
  redrawIcons();
  if (!$("#detail-dialog").open) $("#detail-dialog").showModal();
  $("#detail-dialog").scrollTop = 0;
}
function detailHeader(title, tag) {
  return `<header><span class="type-tag">${escape(tag)}</span><button data-close="detail-dialog" aria-label="Close details">${svg("x")}</button></header><h2 class="detail-title">${escape(title)}</h2>`;
}
function detailsGrid(items) {
  return `<dl class="detail-grid">${items.map(([k, v]) => `<div><dt>${escape(k)}</dt><dd>${escape(v)}</dd></div>`).join("")}</dl>`;
}
function showHot(id) {
  const h = state.hot.find((x) => x.id === id);
  if (!h) return;
  selected = { ...h, date: state.date, species: state.species, kind: "hotspot" };
  panTo(h);
  openDetail(detailHeader(h.name, state.mode === "plan" ? "Modeled seasonal opportunity" : "Modeled hotspot area") + `<p>${state.species === "trout" ? "Rainbow trout \xB7 Oncorhynchus mykiss" : "Red drum \xB7 Sciaenops ocellatus"}</p>` + detailsGrid([["Relative evidence score", `${h.score} / 100 \xB7 not a probability`], ["Planning date", fmtDate(state.date)], ["Evidence", `${h.events} distinct events across ${h.seasons} years`], ["Location precision", `Model radius ${Math.round(h.radius)} m; evidence uncertainty ${h.uncertainty == null ? "unknown" : `up to \xB1${Math.round(h.uncertainty)} m`}`]]) + `<div class="detail-warning">${escape(h.confidence)}. Newest evidence is about ${h.age.toLocaleString()} days before your date. Sampling effort, gear and historical coverage bias this score. ${escape(h.cap || "")}</div><section class="detail-section"><h3>Why this area ranks here</h3>${h.parts.map(([label, value]) => `<div class="score-part"><span>${escape(label)}</span><strong>${value > 0 ? "+" : ""}${value}</strong></div>`).join("")}<p>Scores rank the available evidence; these circles are search areas, not surveyed habitat boundaries. Historical trout observations do not establish current trout presence.</p></section><section class="detail-section"><h3>Evidence in this area</h3>${h.records.slice(0, 12).map((r) => `<button class="result" data-record="${escape(r.id)}"><span class="result-body"><strong>${escape(kinds[r.type])} \xB7 ${escape(fmtDate(r.date))}</strong><p>${escape(r.sourceName)} \xB7 ${r.uncertainty == null ? "uncertainty unknown" : `\xB1${Math.round(r.uncertainty)} m`}</p></span>${svg("chevron-right")}</button>`).join("")}${h.records.length > 12 ? `<p>Showing 12 of ${h.records.length} records. Use the observations layer and filters for the full set.</p>` : ""}</section><div class="detail-actions"><button class="primary" id="save-selection">${svg("bookmark")} Save this trip</button><button id="share-selection">${svg("share-2")} Share</button><button data-close="detail-dialog">Back to map</button></div>`);
}
function showRecord(id) {
  const r = state.records.find((x) => x.id === id);
  if (!r) return;
  selected = { ...r, date: state.date, evidenceDate: r.date, kind: "record" };
  panTo(r);
  openDetail(detailHeader(r.name, kinds[r.type]) + `<p>${escape(r.scientificName)} \xB7 ${r.species === "trout" ? "Rainbow trout" : "Red drum"}</p>` + detailsGrid([["Observation / event date", fmtDate(r.date)], ...r.type === "image-derived" ? [["Season from image", "December\u2013February; year unknown"], ["Digitization note", r.dateNote]] : [], ["Source", r.sourceName], ["Location uncertainty", r.uncertainty != null ? `\xB1${Math.round(r.uncertainty)} m` : "Not supplied by publisher"], ["Coordinate precision note", r.precision], ["Coordinates", `${r.lat.toFixed(5)}, ${r.lon.toFixed(5)} (WGS84)`], ["Collection method", r.method], ["Count", r.count ?? "Not supplied; record is not a fish count"], ["License", r.license], ["Observer / creator", r.creator || r.sourceName]]) + `<div class="detail-warning">${r.type === "image-derived" ? "Approximate screenshot location, snapped to the mapped river for display; original estimate retained in the export. Not original GPS or a verified catch. The image heading gives December\u2013February but no year; date filters and modeled hotspot scores exclude these undated points." : r.type === "stocking-site" ? "This is a published stocking location with approximate coordinates. No event date or stocked quantity is verified. It does not confirm fish are present." : r.type === "angler" ? "An historical angler record, not a live catch report." : "Biological sampling / occurrence evidence. Survey gear may capture juvenile fish; this is not an angler catch pin."}</div><section class="detail-section"><h3>Environment recorded with this event</h3>${Object.keys(r.environment || {}).length ? detailsGrid(Object.entries(r.environment)) : "<p>No environmental measurements were supplied for this record. Current station conditions are separate.</p>"}</section>${r.issues?.length ? `<p class="help">Publisher / GBIF flags: ${escape(r.issues.join(", "))}.</p>` : ""}<div class="detail-actions">${r.url ? `<a href="${escape(r.url)}" target="_blank" rel="noopener">Original record ${svg("external-link")}</a>` : ""}<button class="primary" id="save-selection">${svg("bookmark")} Save trip</button></div>`);
}
function saveSelection() {
  if (!selected) return;
  const s = selected;
  const key = `${s.id}:${s.species}:${state.date}`;
  if (saved.some((x) => x.key === key)) {
    toast("This spot and date are already saved.");
    return;
  }
  saved.push({ key, id: s.id, kind: s.kind, name: s.name, lat: s.lat, lon: s.lon, date: state.date, species: s.species, score: s.score ?? null, savedAt: (/* @__PURE__ */ new Date()).toISOString() });
  persist();
  toast("Trip saved on this device.");
  render();
}
function showSaved(key) {
  const s = saved.find((x) => x.key === key);
  if (!s) return;
  selected = s;
  panTo(s);
  openDetail(detailHeader(s.name, "Saved trip") + detailsGrid([["Fishing date", fmtDate(s.date)], ["Species", s.species === "trout" ? "Rainbow trout" : "Red drum"], ["Coordinates", `${s.lat.toFixed(5)}, ${s.lon.toFixed(5)}`], ["Saved evidence score", s.score == null ? "Observation only" : `${s.score} / 100 (snapshot)`]]) + `<p>Saved locally in this browser. Refresh the trip to recalculate its evidence score with your current dataset and station inputs.</p><div class="detail-actions"><button class="primary" data-revisit="${escape(key)}">${svg("calendar-days")} Open plan</button><button data-export="${escape(key)}">${svg("download")} Export JSON</button><button data-remove="${escape(key)}">${svg("trash-2")} Remove</button></div>`);
}
function showConditions() {
  const e = state.env;
  let html = detailHeader("Conditions at the station", "Public environmental inputs") + `<p><a href="${escape(e.url || "#")}" target="_blank" rel="noopener">${escape(e.station)}</a></p><p>One station provides regional context. Conditions may differ substantially at individual spots. Missing values are never replaced with invented readings.</p>`;
  if (e.future) html += '<div class="detail-warning">For your future trip, current flow, temperature and wind are context only. They are not forecasts and do not change future hotspot scores. NOAA astronomical tides are predictions for the selected date.</div>';
  for (const key of ["flow", "waterTemp", "wind", "tide"]) {
    const m = e[key];
    if (!m) continue;
    html += detailsGrid([[{ flow: "Flow", waterTemp: "Water temperature", wind: "Wind", tide: "Daily tide range" }[key], `${m.value.toFixed(2)} ${m.unit}${m.direction ? " " + m.direction : ""}`], ["Time / provenance", `${m.date} \xB7 ${m.kind}`]]);
  }
  if (e.tide?.values?.length) {
    const vals = e.tide.values.map((x) => x.value), min = Math.min(...vals), span = Math.max(...vals) - min || 1;
    const points = vals.map((v, i) => `${10 + i / (vals.length - 1) * 380},${80 - (v - min) / span * 60}`).join(" ");
    html += `<h3>Selected day: astronomical tide</h3><svg class="tide-plot" viewBox="0 0 400 100" role="img" aria-label="NOAA hourly predicted tide curve, heights in feet MLLW, UTC time"><polyline points="${points}" fill="none" stroke="#246b8d" stroke-width="2"/></svg><p>00:00\u201323:00 UTC \xB7 feet relative to MLLW. Predictions do not include wind-driven water levels. Daily range does not establish current at a particular flat.</p>`;
  }
  html += `<p>${escape(e.errors?.join(" ") || "Available station inputs retrieved successfully.")}</p><div class="detail-actions"><button class="primary" id="retry-conditions">Refresh conditions</button><button data-close="detail-dialog">Close</button></div>`;
  openDetail(html);
}
function sourceDialog(methodOnly = false) {
  $("#source-content").innerHTML = `<section class="source-row"><h3>User screenshot-derived pins</h3><p>96 visible marker locations were manually digitized from your supplied image. Three river landmarks fit an affine pixel-to-coordinate transform; three independent road checks differed by 62\u2013230 m. Conservative uncertainty estimates are 350\u2013450 m, not calibrated confidence bounds. Pixel positions, transformation and a river projection comparison are available in the downloadable coordinate files. Displayed locations are snapped to the nearest mapped Guadalupe River centerline. Original affine coordinates are preserved in the exports; snapping does not improve source accuracy. Heat uses a smaller kernel and lower intensity to distinguish sparse yellow stretches from denser red groups. It represents reported location density, not a fish probability. Hidden/overlapping markers, orange heat blobs and map icons are not recoverable catch counts.</p><p>Year and individual dates are unknown. The image heading supplies only a December\u2013February season. These pins are a separate user-supplied derivative layer; no open license or verified catch status is asserted. They appear in the all-age heatmap and winter filter but do not contribute to dated hotspot scores or recent/historical date filters. The source image itself is not hosted.</p></section><p>This atlas uses public, attributable evidence. Biological captures, angler catches, stocking sites and modeled areas are separate layers. No Fishbrain service was accessed or scraped. A separate derivative layer comes only from the screenshot supplied in this chat.</p><h3>How relative scores work</h3><p>Deterministic grid aggregation (about 2\u20133 km coastal cells; 0.8 km river cells) groups independent sampling events. Evidence points determine the center. The displayed radius is at least 1,500 m coastal / 550 m river, widened for reported uncertainty.</p><p>Up to 25 points for event diversity, 10 for repeated years, 20 for observations within 90 days, 20 for the same or adjacent month, 5 for reported uncertainty \u2264500 m, and a seasonal prior of 2\u201312. Dated stocking within 30 days adds 15. A fresh station water temperature may contribute \u221212 to +3 for today only. Scores clamp to 0\u2013100. No recent evidence caps scores at 65; trout without recent verified stocking caps at 35.</p><p>These are uncalibrated evidence rankings, not percentages or fish predictions. They are affected by uneven sampling and gear. All modeled input records must end on or before the selected date; year-only records are not treated as recent catches. Historical seasonality can be explored on any future date, with NOAA tides when available. Wind and flow forecasts are not implemented.</p><p><strong>Relevance cutoff:</strong> Pre-2000 observations are excluded from the dataset and scores, per your preference. <strong>Seed retrieved:</strong> ${escape(state.retrievedAt)}. No live catch feed. GBIF records are a bounded snapshot; a fresh build may have different coverage.</p>${state.sources.map((s) => `<section class="source-row"><h3>${escape(s.name)}</h3><span class="source-status">Retained after relevance cutoff \xB7 ${state.records.filter((r) => r.source === s.id).length.toLocaleString()} mapped records \xB7 ${escape(s.license)}</span><p>${escape(s.citation)}${s.truncated ? " Bounded API sample: " + s.downloaded + " of " + s.available + " eligible records downloaded; biased coverage is possible." : ""}</p>${s.url ? `<a href="${escape(s.url)}" target="_blank" rel="noopener">Dataset and attribution ${svg("external-link")}</a>` : "<p>Private browser storage. Not included in hosted seed data.</p>"}</section>`).join("")}<section class="source-row"><h3>USGS CreelCat</h3><span class="source-status">Import adapter provided \xB7 no reach records loaded in seed</span><p>Public-domain creel and angler surveys. Survey waterbody / reach geometry must not be represented as individual catch GPS coordinates. The normalized import adapter retains geometry precision and survey dates.</p><a href="https://www.sciencebase.gov/catalog/item/66183787d34e7eb9eb7d7b1c" target="_blank" rel="noopener">Source release</a></section><section class="source-row"><h3>USGS fish presence / absence</h3><span class="source-status">Import adapter provided \xB7 no records loaded in seed</span><p>CC0 release, DOI 10.5066/P9FZ6J6R. Coordinates are stream-reach midpoints (NAD83), not exact fish positions. Only target-species presence records with known precision are eligible for import; absence is not a catch.</p><a href="https://doi.org/10.5066/P9FZ6J6R" target="_blank" rel="noopener">Source release</a></section><section class="source-row"><h3>Station inputs and mapping</h3><p>USGS instantaneous values: station 08167800, Sattler. NOAA CO-OPS: 8774770, Rockport; public U.S. government station data. Display units and timestamp accompany each reading. NOAA tide predictions are astronomical; water temperature and wind are observations.</p><p>MapLibre GL JS (BSD-3-Clause). Map data \xA9 OpenStreetMap contributors (ODbL). OpenFreeMap vector basemap (OpenMapTiles and OpenStreetMap attribution remains on the map). Google Fonts: DM Sans (OFL) and Libre Caslon Text (OFL). Lucide icons (ISC).</p></section><section class="source-row"><h3>Stocking and access</h3><p>Official TPWD schedule checked October 19, 2026: the page still lists 2025\u201326, with Canyon Tailrace dates December 5, 2025 through February 26, 2026. A 2026\u201327 schedule has not been verified. Annual 2026 stocking history reports 15,046 adult rainbow trout; that total does not provide release dates or site allocations and is not used as a recent event.</p><p>TPWD named locations are transcribed public facts; no blanket TPWD open license is asserted. Map coordinates are app estimates (\xB1600 m), not release sites or access permissions. The current dated stocking schedule is not ingested in this seed.</p><a href="https://tpwd.texas.gov/fishboat/fish/management/stocking/trout_stocking.phtml" target="_blank" rel="noopener">Check TPWD's official schedule and regulations</a></section><p>GPS stays in browser memory. Saved trips remain on this device. Basemap/API providers receive ordinary network requests. HTTPS is required for iPhone geolocation.</p>`;
  redrawIcons();
  $("#sources-dialog").showModal();
  $("#sources-dialog").scrollTop = 0;
}
function clearFilters() {
  state.filters = { recency: "all" };
  state.near = false;
  $("#filters-form").reset();
  render();
}
function locationStatus(text) {
  $("#location-status").textContent = text;
  $("#location-status").hidden = false;
  $("#gps-map-status").textContent = text;
  $("#gps-map-status").hidden = false;
  updateOfflineBadge();
}
function stopGPS() {
  if (state.watch != null) navigator.geolocation.clearWatch(state.watch);
  state.watch = null;
  state.near = false;
  state.location = null;
  positionMarker?.remove();
  positionMarker = null;
  $("#locate").classList.remove("tracking");
  $("#locate").setAttribute("aria-label", "Start GPS tracking");
  locationStatus("GPS stopped. Your position is not stored.");
  render();
}
function startGPS(near = false) {
  if (!navigator.geolocation) {
    locationStatus("This browser does not support GPS.");
    return;
  }
  if (!window.isSecureContext) {
    locationStatus("GPS needs HTTPS. Open the deployed app link in Safari.");
    return;
  }
  if (state.watch != null) {
    if (near) {
      state.near = true;
      render();
    } else stopGPS();
    return;
  }
  locationStatus("Finding your position\u2026 Allow location access in Safari.");
  state.watch = navigator.geolocation.watchPosition((p) => {
    state.location = { lat: p.coords.latitude, lon: p.coords.longitude, accuracy: p.coords.accuracy };
    if (near) state.near = true;
    locationStatus(`GPS tracking \xB7 \xB1${Math.round(p.coords.accuracy)} m${state.near ? " \xB7 within " + state.radius + " km" : ""}`);
    $("#locate").classList.add("tracking");
    $("#locate").setAttribute("aria-label", "Stop GPS tracking");
    if (map) {
      if (!positionMarker) positionMarker = new WF({ color: "#246b8d" }).setLngLat([state.location.lon, state.location.lat]).addTo(map);
      else positionMarker.setLngLat([state.location.lon, state.location.lat]);
      map.easeTo({ center: [state.location.lon, state.location.lat], zoom: Math.max(map.getZoom(), 11) });
    }
    render();
  }, (err) => {
    if (state.watch != null) navigator.geolocation.clearWatch(state.watch);
    state.watch = null;
    state.near = false;
    $("#locate").classList.remove("tracking");
    $("#locate").setAttribute("aria-label", "Start GPS tracking");
    positionMarker?.remove();
    positionMarker = null;
    state.location = null;
    locationStatus(err.code === 1 ? "Location permission denied. Enable it in Safari site settings, then tap GPS again." : err.code === 3 ? "GPS timed out. Move where your phone has a clearer signal, then retry." : "Your position is unavailable. Check iPhone Location Services and retry.");
    render();
  }, { enableHighAccuracy: true, maximumAge: 1e4, timeout: 2e4 });
}
function setSpecies(species) {
  const previous = state.species;
  state.species = species;
  if (map && previous !== species) {
    state.ready = false;
    delete $("#map").dataset.rendered;
    map.setStyle(mapStyle());
  }
  state.filters = { recency: "all", ...species === "trout" ? { source: "user-image-guad" } : {} };
  if (species === "trout") {
    state.date = today();
    state.mode = "explore";
    setHeatmap(true);
  }
  $("#filters-form").reset();
  document.querySelectorAll("[data-species]").forEach((b) => {
    b.classList.toggle("active", b.dataset.species === species);
    b.setAttribute("aria-pressed", b.dataset.species === species);
  });
  $("#map-region").textContent = species === "trout" ? "Guadalupe River \xB7 Below Canyon Dam" : "Aransas \xB7 Rockport \xB7 Redfish Bay";
  updateSources();
  render();
  fitRegion();
  refreshEnvironment();
}
function updateSources() {
  $("#source-filter").innerHTML = '<option value="">All sources</option>' + state.sources.filter((s) => state.records.some((r) => r.source === s.id && r.species === state.species)).map((s) => `<option value="${escape(s.id)}">${escape(s.name)}</option>`).join("");
}
document.addEventListener("click", async (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.close) {
    $("#" + b.dataset.close).close();
    return;
  }
  if (b.dataset.hot) {
    showHot(b.dataset.hot);
    return;
  }
  if (b.dataset.record) {
    showRecord(b.dataset.record);
    return;
  }
  if (b.dataset.saved) {
    showSaved(b.dataset.saved);
    return;
  }
  if (b.id === "save-selection") {
    saveSelection();
    return;
  }
  if (b.dataset.remove) {
    saved = saved.filter((x) => x.key !== b.dataset.remove);
    persist();
    $("#detail-dialog").close();
    render();
    return;
  }
  if (b.dataset.revisit) {
    const s = saved.find((x) => x.key === b.dataset.revisit);
    $("#detail-dialog").close();
    state.mode = "plan";
    state.date = s.date;
    setSpecies(s.species);
    panTo(s);
    return;
  }
  if (b.dataset.export) {
    const s = saved.find((x) => x.key === b.dataset.export);
    const blob = new Blob([JSON.stringify(s, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `river-reed-${s.date}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1e3);
    return;
  }
  if (b.id === "share-selection") {
    const u = new URL(location.href);
    u.search = new URLSearchParams({ species: state.species, date: state.date, spot: selected.id });
    try {
      if (navigator.share) await navigator.share({ title: `River & Reed \xB7 ${selected.name}`, url: u.href });
      else {
        await navigator.clipboard.writeText(u.href);
        toast("Plan link copied.");
      }
    } catch {
      toast("Share canceled or unavailable.");
    }
    return;
  }
  if (b.id === "retry-conditions") {
    await refreshEnvironment();
    showConditions();
    return;
  }
});
$("#sheet-handle").onclick = () => {
  $("#panel").classList.toggle("expanded");
  $("#sheet-handle").setAttribute("aria-expanded", $("#panel").classList.contains("expanded"));
};
let touchY = null;
$("#sheet-handle").addEventListener("touchstart", (e) => touchY = e.touches[0].clientY, { passive: true });
$("#sheet-handle").addEventListener("touchend", (e) => {
  if (touchY == null) return;
  const dy = e.changedTouches[0].clientY - touchY;
  if (Math.abs(dy) > 20) {
    $("#panel").classList.toggle("expanded", dy < 0);
    $("#sheet-handle").setAttribute("aria-expanded", dy < 0);
  }
  touchY = null;
}, { passive: true });
document.querySelectorAll("[data-species]").forEach((b) => b.onclick = () => setSpecies(b.dataset.species));
for (const mode of ["explore", "plan", "saved"]) $(`#${mode}-tab`).onclick = () => {
  state.mode = mode;
  if (mode === "plan" || mode === "saved") $("#panel").classList.add("expanded");
  render();
};
$("#trip-date").value = state.date;
$("#trip-date").onchange = (e) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.target.value)) {
    e.target.value = state.date;
    return;
  }
  state.date = e.target.value;
  if (state.date > today()) state.mode = "plan";
  render();
  refreshEnvironment();
};
$("#hotspots-tab").onclick = () => {
  state.layer = "hotspots";
  render();
};
$("#observations-tab").onclick = () => {
  state.layer = "observations";
  render();
};
$("#filter-button").onclick = () => {
  $("#filters-dialog").showModal();
};
$("#reset-filters").onclick = () => {
  $("#filters-form").reset();
};
$("#filters-form").onsubmit = (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  if (f.start && f.end && f.start > f.end) {
    $("#filter-error").textContent = "The start date must be before the end date.";
    return;
  }
  for (const [a, b] of [["flowMin", "flowMax"], ["stationTempMin", "stationTempMax"]]) {
    if (f[a] !== "" && f[b] !== "" && Number(f[a]) > Number(f[b])) {
      $("#filter-error").textContent = "Each minimum must be below its maximum.";
      return;
    }
  }
  state.filters = f;
  $("#filter-error").textContent = "";
  $("#filters-dialog").close();
  render();
};
$("#sources-button").onclick = () => sourceDialog();
$("#method-button").onclick = () => sourceDialog(true);
$("#refresh").onclick = refreshEnvironment;
$("#locate").onclick = () => startGPS();
$("#near-button").onclick = () => {
  if (state.near) {
    state.near = false;
    render();
  } else startGPS(true);
};
$("#radius").onchange = (e) => {
  state.radius = Number(e.target.value);
  render();
};
$("#legend-toggle").onclick = () => {
  const list = $("#legend-items");
  list.hidden = !list.hidden;
  $("#legend-toggle").setAttribute("aria-expanded", !list.hidden);
};
$("#fit").onclick = fitRegion;
$("#map-style").onclick = () => {
  state.basemap = state.basemap === "light" ? "dark" : "light";
  state.ready = false;
  delete $("#map").dataset.rendered;
  $("#map").dataset.imageInView = 0;
  map?.setStyle(mapStyle());
  map?.once("style.load", () => {
    if (!map.getSource("records")) addLayers();
  });
};
for (const dialog of document.querySelectorAll("dialog")) dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  }
});
if (window.innerWidth <= 760) {
  $("#legend-items").hidden = true;
  $("#legend-toggle").setAttribute("aria-expanded", "false");
}
redrawIcons();
initMap();
Promise.all(["/data/guad-offline-map.geojson", "/data/guad-river.geojson"].map(async (url) => {
  const r = await fetch(url);
  if (!r.ok) throw Error("River map unavailable");
  return r.json();
})).then(([base, line]) => {
  riverBasemap = base;
  riverLine = line;
  map?.getSource("river-basemap")?.setData(base);
  map?.getSource("river-centerline")?.setData(line);
}).catch(() => {
  if (state.species === "trout") toast("River background could not load. Reconnect and save the map again.");
});
fetch("/data/stocking-status.json").then((r) => {
  if (!r.ok) throw Error();
  return r.json();
}).then((data) => {
  state.stocking = data;
  renderTroutSummary();
}).catch(() => {
  state.stocking = { unavailable: true };
  renderTroutSummary();
});
try {
  const response = await fetch("/data/seed.json");
  if (!response.ok) throw Error();
  const data = await response.json();
  state.records = [...data.records, ...personal];
  state.sources = [...data.sources, ...personal.length ? [personalSource] : []];
  state.retrievedAt = data.retrievedAt;
  try {
    const imageResponse = await fetch("/data/guad-image-points.json");
    if (!imageResponse.ok) throw Error();
    const imagePack = await imageResponse.json();
    state.records.push(...imagePack.records.map((r) => ({ ...r, species: "trout", type: "image-derived", source: "user-image-guad", sourceName: r.source_name, lat: r.latitude, lon: r.longitude, date: null, month: null, year: null, seasonMonths: r.season_months, uncertainty: r.uncertainty_m, precision: r.precision_note, dateNote: r.date_note, eventId: r.id, scientificName: "Trout (image heading; species not independently verified)", method: "Manual screenshot pin digitization", license: "User-supplied derivative; no open license asserted", creator: "User-supplied screenshot", url: null, environment: {} })));
    state.sources.push({ id: "user-image-guad", name: "User screenshot \xB7 approximate undated pins", url: null, license: imagePack.license, citation: imagePack.provenance });
  } catch {
    toast("Screenshot-derived locations could not load. Other evidence remains available.");
  }
  const q = new URLSearchParams(location.search);
  if (/^\d{4}-\d{2}-\d{2}$/.test(q.get("date") || "")) {
    state.date = q.get("date");
    state.mode = "plan";
  }
  updateSources();
  setSpecies(q.get("species") === "redfish" ? "redfish" : "trout");
  if (q.get("source") === "user-image-guad") {
    state.filters.source = "user-image-guad";
    state.layer = "observations";
    $("#source-filter").value = "user-image-guad";
    render();
    fitRegion();
  }
  if (q.get("spot")) {
    const id = q.get("spot");
    if (id.startsWith("hot-")) showHot(id);
    else showRecord(id);
  }
} catch {
  $("#results").innerHTML = '<div class="empty"><h3>Evidence could not load.</h3><p>Check your connection and reload this page. No sample observations have been substituted.</p><button onclick="location.reload()">Reload atlas</button></div>';
  $("#coverage").textContent = "Data unavailable";
}
window.addEventListener("offline", () => toast("Offline: saved evidence remains available. Map tiles and live station inputs need a connection."));
if ("serviceWorker" in navigator && true) navigator.serviceWorker.register("/sw.js").catch(() => {
});
function openPersonal() {
  $("#personal-count").textContent = `${personal.length} private catch records on this device.`;
  const date = $('#catch-form input[name="date"]');
  date.value = today();
  date.max = today();
  $("#personal-dialog").showModal();
}
function storePersonal(rows) {
  const next = mergePersonal(personal, rows);
  if (next.length > 5e3) throw Error("This journal supports up to 5,000 catches.");
  localStorage.setItem(personalKey, JSON.stringify(next));
  personal = next;
  state.records = [...state.records.filter((r) => r.source !== "personal"), ...personal];
  state.sources = [...state.sources.filter((s) => s.id !== "personal"), ...personal.length ? [personalSource] : []];
  updateSources();
  render();
  $("#personal-count").textContent = `${personal.length} private catch records on this device.`;
}
$("#my-data-button").onclick = openPersonal;
$("#heatmap-toggle").onclick = () => {
  setHeatmap(!state.heatmap);
  if (state.heatmap) toast("Heat shows filtered observation density, not a probability of fish.");
};
$("#catch-use-gps").onclick = () => {
  if (!state.location) {
    $("#personal-error").textContent = "Start GPS tracking with the map crosshair first, then reopen this journal.";
    return;
  }
  for (const [name, value] of [["latitude", state.location.lat], ["longitude", state.location.lon], ["uncertainty_m", Math.round(state.location.accuracy)]]) $(`#catch-form [name="${name}"]`).value = value;
};
$("#catch-form").onsubmit = (e) => {
  e.preventDefault();
  try {
    const row = Object.fromEntries(new FormData(e.target));
    row.id = crypto.randomUUID();
    row.record_type = "angler";
    storePersonal([normalizePersonal(row)]);
    $("#personal-error").textContent = "Catch saved privately on this device.";
    e.target.reset();
    e.target.elements.date.value = today();
  } catch (err) {
    $("#personal-error").textContent = err.message;
  }
};
$("#personal-file").onchange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    if (!$("#personal-rights").checked) throw Error("Confirm that you own or are permitted to use these records.");
    if (file.size > 2 * 1024 * 1024) throw Error("File is too large. Use a file smaller than 2 MB.");
    const added = parsePersonal(await file.text(), file.name.toLowerCase().endsWith(".csv") ? "csv" : "json");
    storePersonal(added);
    $("#personal-error").textContent = `Imported ${added.length} rows; duplicates were updated. No data was uploaded.`;
  } catch (err) {
    $("#personal-error").textContent = err.message;
  }
  e.target.value = "";
};
$("#personal-export").onclick = () => {
  const blob = new Blob([JSON.stringify({ records: personal }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "river-reed-personal-catches.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1e3);
};
$("#personal-clear").onclick = (e) => {
  if (!personal.length) return;
  if (e.currentTarget.dataset.confirm !== "yes") {
    e.currentTarget.dataset.confirm = "yes";
    e.currentTarget.textContent = "Tap again to clear journal";
    return;
  }
  localStorage.removeItem(personalKey);
  personal = [];
  state.records = state.records.filter((r) => r.source !== "personal");
  state.sources = state.sources.filter((s) => s.id !== "personal");
  updateSources();
  render();
  $("#personal-count").textContent = "Journal cleared on this device.";
  e.currentTarget.dataset.confirm = "no";
  e.currentTarget.textContent = "Clear journal";
};
$("#share-map-button").onclick = async () => {
  const url = new URL("/?species=" + state.species, location.origin).href;
  try {
    if (navigator.share) await navigator.share({ title: "River & Reed \xB7 " + (state.species === "trout" ? "Guadalupe River heatmap" : "Texas coast"), url });
    else {
      await navigator.clipboard.writeText(url);
      toast("Map link copied.");
    }
  } catch {
    toast("Sharing canceled or unavailable. Copy the address from your browser.");
  }
};

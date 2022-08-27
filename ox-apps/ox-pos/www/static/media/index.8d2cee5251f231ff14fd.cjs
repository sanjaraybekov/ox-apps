"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var tty=require("tty");function _interopNamespace(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(i){if("default"!==i){var r=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return e[i]}})}})),t.default=e,Object.freeze(t)}var tty__namespace=_interopNamespace(tty);const env=process.env||{},argv=process.argv||[],isDisabled="NO_COLOR"in env||argv.includes("--no-color"),isForced="FORCE_COLOR"in env||argv.includes("--color"),isWindows="win32"===process.platform,isCompatibleTerminal=tty__namespace&&tty__namespace.isatty&&tty__namespace.isatty(1)&&env.TERM&&"dumb"!==env.TERM,isCI="CI"in env&&("GITHUB_ACTIONS"in env||"GITLAB_CI"in env||"CIRCLECI"in env),isColorSupported=!isDisabled&&(isForced||isWindows||isCompatibleTerminal||isCI),replaceClose=(e,t,i,r,g=t.substring(0,e)+r,n=t.substring(e+i.length),l=n.indexOf(i))=>g+(l<0?n:replaceClose(l,n,i,r)),clearBleed=(e,t,i,r,g)=>e<0?i+t+r:i+replaceClose(e,t,r,g)+r,filterEmpty=(e,t,i=e,r=e.length+1)=>g=>g||""!==g&&void 0!==g?clearBleed((""+g).indexOf(t,r),g,e,t,i):"",init=(e,t,i)=>filterEmpty(`\x1b[${e}m`,`\x1b[${t}m`,i),colors={reset:init(0,0),bold:init(1,22,"\x1b[22m\x1b[1m"),dim:init(2,22,"\x1b[22m\x1b[2m"),italic:init(3,23),underline:init(4,24),inverse:init(7,27),hidden:init(8,28),strikethrough:init(9,29),black:init(30,39),red:init(31,39),green:init(32,39),yellow:init(33,39),blue:init(34,39),magenta:init(35,39),cyan:init(36,39),white:init(37,39),gray:init(90,39),bgBlack:init(40,49),bgRed:init(41,49),bgGreen:init(42,49),bgYellow:init(43,49),bgBlue:init(44,49),bgMagenta:init(45,49),bgCyan:init(46,49),bgWhite:init(47,49),blackBright:init(90,39),redBright:init(91,39),greenBright:init(92,39),yellowBright:init(93,39),blueBright:init(94,39),magentaBright:init(95,39),cyanBright:init(96,39),whiteBright:init(97,39),bgBlackBright:init(100,49),bgRedBright:init(101,49),bgGreenBright:init(102,49),bgYellowBright:init(103,49),bgBlueBright:init(104,49),bgMagentaBright:init(105,49),bgCyanBright:init(106,49),bgWhiteBright:init(107,49)},none=e=>e,createColors=({useColor:e=isColorSupported}={})=>e?colors:Object.keys(colors).reduce(((e,t)=>({...e,[t]:none})),{}),{reset:reset,bold:bold,dim:dim,italic:italic,underline:underline,inverse:inverse,hidden:hidden,strikethrough:strikethrough,black:black,red:red,green:green,yellow:yellow,blue:blue,magenta:magenta,cyan:cyan,white:white,gray:gray,bgBlack:bgBlack,bgRed:bgRed,bgGreen:bgGreen,bgYellow:bgYellow,bgBlue:bgBlue,bgMagenta:bgMagenta,bgCyan:bgCyan,bgWhite:bgWhite,blackBright:blackBright,redBright:redBright,greenBright:greenBright,yellowBright:yellowBright,blueBright:blueBright,magentaBright:magentaBright,cyanBright:cyanBright,whiteBright:whiteBright,bgBlackBright:bgBlackBright,bgRedBright:bgRedBright,bgGreenBright:bgGreenBright,bgYellowBright:bgYellowBright,bgBlueBright:bgBlueBright,bgMagentaBright:bgMagentaBright,bgCyanBright:bgCyanBright,bgWhiteBright:bgWhiteBright}=createColors();exports.bgBlack=bgBlack,exports.bgBlackBright=bgBlackBright,exports.bgBlue=bgBlue,exports.bgBlueBright=bgBlueBright,exports.bgCyan=bgCyan,exports.bgCyanBright=bgCyanBright,exports.bgGreen=bgGreen,exports.bgGreenBright=bgGreenBright,exports.bgMagenta=bgMagenta,exports.bgMagentaBright=bgMagentaBright,exports.bgRed=bgRed,exports.bgRedBright=bgRedBright,exports.bgWhite=bgWhite,exports.bgWhiteBright=bgWhiteBright,exports.bgYellow=bgYellow,exports.bgYellowBright=bgYellowBright,exports.black=black,exports.blackBright=blackBright,exports.blue=blue,exports.blueBright=blueBright,exports.bold=bold,exports.createColors=createColors,exports.cyan=cyan,exports.cyanBright=cyanBright,exports.dim=dim,exports.gray=gray,exports.green=green,exports.greenBright=greenBright,exports.hidden=hidden,exports.inverse=inverse,exports.isColorSupported=isColorSupported,exports.italic=italic,exports.magenta=magenta,exports.magentaBright=magentaBright,exports.red=red,exports.redBright=redBright,exports.reset=reset,exports.strikethrough=strikethrough,exports.underline=underline,exports.white=white,exports.whiteBright=whiteBright,exports.yellow=yellow,exports.yellowBright=yellowBright;
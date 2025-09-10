import {Frame} from './Railroad';

//import * as xxxx from 'xlsx';

//var XLSX = require("xlsx");

import * as XLSX from 'xlsx';
//import * as XLSX from 'xlsx-js-style';

/* load 'fs' for readFile and writeFile support */
//import * as fs from 'fs';
//XLSX.set_fs(fs);

/* load 'stream' for stream support */
/* load 'stream' for stream support */
//import { Readable } from 'stream';
//XLSX.stream.set_readable(Readable);

/* load the codepage support library for extended support with older formats  */
//import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
//import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
//import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
//XLSX.set_cptable(cpexcel);

//import {PathCommand} from '@svgdotjs/svg.js';
//import {degreesToRadians} from './Rotator';
/*
export const circle = (cx: number, cy: number, r: number): PathCommand[] => [
    ['M', cx - r, cy],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, r * -2, 0],
];
*/

export function writeSpreadSheet(frames: Frame[],
) {

console.log('frames',frames);
    // STEP 1: Create a new workbook
    const wb = XLSX.utils.book_new();
    console.log( "JSON frames:", JSON.stringify(frames, null, 2));
//    const worksheet = XLSX.utils.json_to_sheet(frames);
//    const worksheet = XLSX.utils.aoa_to_sheet([frames]);
//    let worksheet = XLSX.utils.json_to_sheet(frames);

    // STEP 2: Create data rows and styles
/*
    let row = 
[
  { name: "George Washington", birthday: "1732-02-22" },
  { name: "John Adams", birthday: "1735-10-19" },
  // ... one row per President
];
*/
/*    
    [
	    { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
    	{ v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
	    { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
    	{ v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
    ];
*/
    // STEP 3: Create worksheet with rows; Add worksheet to workbook
    //const worksheet = XLSX.utils.aoa_to_sheet([row]);
    //const worksheet = XLSX.utils.json_to_sheet(row);
    const worksheet = XLSX.utils.json_to_sheet(frames);
console.log('90');
//    XLSX.utils.book_append_sheet(wb, worksheet, "Frames");
    XLSX.utils.book_append_sheet(wb, worksheet, "Frames");

    // STEP 4: Write Excel file to browser
XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
    //XLSX.writeFile(wb, "xlsx-js-style-demo.ods");

console.log('99');
}





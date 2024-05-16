import document from "document";

import * as simpleActivity from "./simple/activity";
import * as simpleClock from "./simple/clock";
import * as simpleHRM from "./simple/hrm";
import * as simpleSettings from "./simple/device-settings";

let txtTime = document.getElementById("txtTime");
let txtDate = document.getElementById("txtDate");

/* --------- CLOCK ---------- */
function clockCallback(data) {
  txtTime.text = data.time;
  txtDate.text = data.date;
}
simpleClock.initialize("seconds", "longDateYMD", clockCallback);

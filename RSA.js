const { touchDown, touchMove, touchUp, usleep, appActivate, keyDown, keyUp } = at

function robinhood(nameInput){
    appActivate("com.robinhood.release.Robinhood");

    touchDown(6, 1023.53, 230.30);
    usleep(182335.50);
    touchUp(6, 1023.53, 230.30);
    usleep(3903428.46);

    touchDown(1, 275.44, 346.62);
    usleep(124142.04);
    touchUp(1, 275.44, 346.62);

    keyDown(nameInput.value);
}
const label = { type: CONTROLLER_TYPE.LABEL, text: "Please input the following information:" }
const nameInput = { type: CONTROLLER_TYPE.INPUT, title: "Ticker:", key: "Ticker", value: "" }
//const positionPicker = { type: CONTROLLER_TYPE.PICKER, title: "Position:", key: "Position", value: "CEO", options: ["CEO", "CTO", "CFO", "CXO"] }
const public = { type: CONTROLLER_TYPE.SWITCH, title: "Use Public?:", key: "PublicBuy", value: 1 }
const sofi = { type: CONTROLLER_TYPE.SWITCH, title: "Use SOFI?:", key: "SofiBuy", value: 1 }
const hood = { type: CONTROLLER_TYPE.SWITCH, title: "Use Robinhood?:", key: "RobinBuy", value: 1 }

console.log(nameInput.value)
// It's an option for users to determine weather the inputs should be remembered, if you use this control in the dialog.
//const remember = { type: CONTROLLER_TYPE.REMEMBER, on: false }

/*
Define buttons:
type = CONTROLLER_TYPE.BUTTON
title = Button text
color = Button background color, it's optional, the default value is 0x428BCA
width = Button width upon percentage of the dialog width, it's optional, the default value is 0.5, max value is 1.0.
flag = Integer type of button flag for identifying which button is tapped.
collectInputs = Boolean type specifying wheather the dialog should collect the inputs while this button is tapped.
*/

const submitBtn = { type: CONTROLLER_TYPE.BUTTON, title: "START", width: 1.0, flag: 1, collectInputs: true }
const cancelBtn = { type: CONTROLLER_TYPE.BUTTON, title: "START", width: 1.0, flag: 2, collectInputs: true }

const controls = [label, nameInput, public, sofi, hood, submitBtn, cancelBtn]

// Pop up the dialog. After popping, the script will suspend waiting for user input until any button is tapped, then returns the flag of tapped button.

// What orientations the dialog could be, it's optional
const orientations = [INTERFACE_ORIENTATION_TYPE.PORTRAIT, INTERFACE_ORIENTATION_TYPE.LANDSCAPE_LEFT, INTERFACE_ORIENTATION_TYPE.LANDSCAPE_RIGHT];

const result = at.dialog({ controls, orientations });

if (result == 1) {
    alert("name:%s, birthday:%s, gender:%d", nameInput.value, positionPicker.value, developerSwitch.value)
    usleep(3903428.46);
    robinhood(nameInput)
} else if (result == 2) {
    alert("Cancelled? Dialog returned: %s", result)
}

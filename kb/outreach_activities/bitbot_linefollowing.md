# BitBot Line-following

## Who is this for?

Participants with little to no programming experience, probably aged 8 to 12 years old.
Those with previous experience with block-based programming (Scratch, micro:bit) tend to find the activity easier.

We have previously run this activity at [Science and Engineering Day](https://www.southampton.ac.uk/per/university/festival/science-and-engineering-day.page), a SEND school, and local Cubs groups.


## Description and goals

[4tronix BitBots](https://shop.4tronix.co.uk/products/bitbotpro) are robot bases that can be controlled by a BBC micro:bit. Relevant to this activity, they have motors and three IR sensors at the front that face the ground. The sensors can be used to detect between IR reflective surfaces (white gaffer tape) and IR absorbant surfaces (black gaffer tape). They can therefore be programmed to autonomously follow a line of black gaffer tape on a white background (or vice versa).


## Assets and materials

| Item | Qty | Notes |
|---|---|---|
| laptops | n | with charger (and optionally a mouse) |
| USB cables | n | to connect laptops to micro:bit (USB Micro B) |
| micro:bit | n | |
| BitBot Pro | n | |
| AA batteries | 3n | obviously bring spares! |
| plywood walls | | |
| black gaffer tape (12mm) | | line to follow |
| white gaffer tape (50mm) | | contrast background for line |

Where n is the number of participants or partipant pairs.
Always bring spare consumables and USB cables!


## Activity structure

Slides are not necessary, but can be useful for visualising how the BitBot's sensors can be used to detect the line, and how the BitBot should react to input from the sensors.

A line-following course can be constructed with the plywood walls and gaffer tape.
When laying the line, avoid angles sharper than 30 degrees or so.
Participants should stay outside the walls to avoid damage to them or the moving BitBots.
In tight classroom spaces like for Science and Engineering Day, access to the arena may be difficult, in which case sample lines on tables near the laptops can be laid for rapid testing.

A [micro:bit classroom](https://classroom.microbit.org/) instance should be set up ahead of time.
For most sessions where the focus is on logical thinking rather than the details of Python syntax, the 'Code editor' option can be set to MakeCode.
The 'Starter code' should be edited so that participants don't have to worry about BitBot setup details.
To do this, first add the BitBot extension via the Extensions menu in the code editor.
```js
bitbot.select_model(BBModel.PRO)
basic.pause(100)
bitbot.bbEnableBluetooth(BBBluetooth.btDisable)
bitbot.setThreshold(40, 5)
bitbot.enablePID(false)

basic.forever(function () {})
```
Then switch the editor to the JavaScript mode using the toggle at the top-middle of the editor, paste in the following JavaScript snippet, and convert back to code blocks.

The start of a session should be an explanation to participants of the concept of autonomous line-following and how it can be achieved with the BitBots.

Participants may not be familiar with the concept of dragging and dropping code blocks and where they need to go in their workspace, so it may be a good idea to get them to start with something simple like using the LED output block to show a pictogram by placing it in the 'forever' block.
This also provides a visible indicator that the code compilation and flash to the micro:bit is working.

Participants who are not familiar with programming basics will need to be introduced to the concept of 'if-else' conditions.  
It may also be worth explaining how steering works (the motor on the side to turn towards should go slower than the other or backwards).

Here is the JavaScript version of a simple example solution for the 'forever' block:
```js
basic.forever(function () {
    if (bitbot.readLineDigital(BBPLineSensor.Left)) {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 40)
        bitbot.move(BBMotor.Left, BBDirection.Reverse, 10)
    } else if (bitbot.readLineDigital(BBPLineSensor.Right)) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 40)
        bitbot.move(BBMotor.Right, BBDirection.Reverse, 10)
    } else {
        bitbot.go(BBDirection.Forward, 50)
    }
})
```


## Tips and notes

The BitBots can be quite temperamental, despite costing over £40 each.
Changes in ambient temperature can cause the expected analogue readings from the IR sensors for black and white surfaces to drift.
The analogue readings from the IR sensors as they are moved over the line and contrast background can be read back to micro:bit classroom to adjust the threshold and hysteresis values set in the 'on start' sample code.

When running the activity at Science and Engineering Day, this tends to be more structured and productive as a ticketed event, e.g. with 10 slots in each of six or so timetabled sessions. During the activity application process, such details should be communicated with the PERu/SOTSEF team, who manage the ticketing.


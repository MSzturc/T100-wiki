---
title: "FAQ"
ogTitle: "FAQ - THE 100 3d Printer"
description: "Questions about sourcing, printing, and building THE 100 v1.1 3d printer"
lead: ""
date: 2023-07-11T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  t100v10:
    parent: "overview-v11"
    identifier: "faq-v11"
weight: 90
toc: true
doc: t100v10
images: 
  - images/tfd_faq.png
---
# Frequently Asked Questions
This FAQ will include answers directly on this page, as well as provide links to other pages or other locations. I will continually update it as I see questions come up. 

## General FAQ

### What is different between v1 and v1.1?
  * New Toolhead: The toolhead was redevelop from scratch. Compared to v1.0 it's able to push about 65% more air at the critical point directly under the nozzle.
  * New Feet: The new feet are able to absorb 25%-30% more force before the frame starts shaking
  * Removed Rods from the back of the printer: This removed 2 linear rods from the BOM reducing the price of the printer by another 7-10$
  * Clearance fix for Toolhead: The toolhead is now able to move 5-6mm more in the X-Axis
  * Added allen wrench holes for X/Y-Motors
  * Added Nut-Inserts to the Mainboard Mount
  * Added Clamp to fix Power Cord
  * Made LM8UU Exchangable
  * Added Quickmounts for Z-Rods
  * Bugfix: Power Supply Holder
  * Added cable guides for proper cable management

<a href="https://discord.com/channels/1086229147107459133/1086242902193225748/1117775589454135337" target="_blank">Source</a>

### Should I make v1, v1.1, or wait for v2?
I would highly recommend printing v1.1 rather than v1 due to the various quality of life upgrades and fixes that come with v1.1. Note that there are several part differences between the two so you'll need to make sure and print the correct parts for v1.1.  

v2, which is currently planned for March 2024, is pretty much going to be a different printer with major design changes. Matt has said there will be a direct drive toolhead and I've seen mention of potentially having 4wd (4 motors for X/Y movement). I wouldn't recommend waiting for v2; I would definitely go for v1.1. 

<a href="https://discord.com/channels/1086229147107459133/1086242585049305150/1124699337029591080" target="_blank">Source 1</a>, <a href="https://discord.com/channels/1086229147107459133/1086242585049305150/1138111012462145598" target="_blank">Source 2</a>, <a href="https://discord.com/channels/1086229147107459133/1086240900520345650/1118305868476338247" target="_blank">Source 3</a>

### What is the bed size?
THE 100 uses a 165*165 bed size -- the BOM recommends using an Ender 2 Pro bed. 

### Can I use a larger bed size?
Matt specifically chose 165*165 as the sweet spot between being large enough, and speed. Increasing the bed size will slow the printer down which isn't the goal of THE 100. 

However, there are several 235*235 created by the community <a href="https://discord.com/channels/1086229147107459133/1086248812219224125" target="_blank">in the mods section</a>. For example: one by <a href="https://discord.com/channels/1086229147107459133/1088227946596147221" target="_blank">btlucas</a>, and another by <a href="https://discord.com/channels/1086229147107459133/1093732964631842836" target="_blank">Duncan</a>. 

<a href="https://discord.com/channels/1086229147107459133/1086242585049305150/1138111893211459615" target="_blank">Source</a>

## Printing FAQ
### Why use PLA / Can I print with some other filament?
Despite what most people think, PLA is extremely rigid. And when you're printing a frame that needs to be stiff... you want a rigid filament. Other filaments (like PLA+) may be "stronger" because they're more flexible and can bend without breaking, but bending isn't a good quality in what should be a rigid frame. PLA also has good dampening properties and creates a consistent vibration profile.

Other filaments, like ABS, will work but they have a lower material density than PLA so you will need to increase infill to compensate for that. ASA is another option if you need to withstand higher heat than the printer is originally designed for. 

The ultimate answer is that PLA works great for this project, and it's the most affordable, which aligns with the THE 100's goals.

<a href="https://discord.com/channels/1086229147107459133/1086242585049305150/1135687700033318962" target="_blank">Source 1</a>, <a href="https://discord.com/channels/1086229147107459133/1086240900520345650/1133912749747998772" target="_blank">Source 2</a>, <a href="https://discord.com/channels/1086229147107459133/1086242585049305150/1109794216244150363" target="_blank">Source 3</a>

### How long does it take to print THE 100?
Details on how long it takes and how much filament is used can be found <a href="https://theforgetful.dev/the100/1.1/overview/before-you-print/#print-time">in the overview</a>. 

## Buying / Sourcing FAQ
### How many fasteners (screws / heat inserts / etc) do I need?
This is the question I've seen the most and is what lead me to create this whole guide. A grand total can be found <a href="https://theforgetful.dev/the100/1.1/overview/bill-of-materials/#fasteners--hardware">here</a>, with individual counts being listed with each particular part (<a href="https://theforgetful.dev/the100/1.1/printing-guide/top-frame/#top-back-left">example</a>). 

### Can I use something other than the Ender 2 Pro bed?
I've seen several people report not being able to source the Ender 2 Pro bed. I suspect this is a country-specific issue as the vast majority find them readily available on aliexpress or directly from the Ender store. However, check <a href="https://discord.com/channels/1086229147107459133/1086248812219224125" target="_blank">the mods section</a> for various modifications that allow you to use other beds.

For example: <a href="https://discord.com/channels/1086229147107459133/1097124182883586099" target="_blank">Prusa Mini bed by cpx</a>, <a href="https://discord.com/channels/1086229147107459133/1095690631461994527" target="_blank">KP3S bed by MashedPotato</a>, and <a href="https://discord.com/channels/1086229147107459133/1095265967082328075" target="_blank">Ender 3 bed by Overgo</a>. 

### Does the SD card matter?
I <b>HIGHLY</b> you purchase a quality SD card rather than using a cheap offbrand one. Cheap flash memory <i>could</i> work fine, or it could be the source of constant gremlins that are impossible to chase down. If you find that you have things working and then suddenly they stop... the SD card is the most likely culprit. A basic 32GB SanDisk ultra can be bought for about $5 on Amazon and will save you so many headaches.

### Do I need the wifi antenna for the Banana Pi?
Yes, you definitely need the antenna. I had my BPi within 10 feet of a wifi access point and I still couldn't get internet without an antenna plugged in.

### What motors should I get?
#### The BOM motors
THE 100 BOM currently links to motors that offer 3 options: `17HS4401-XH2.54`, `17HS4401-DuPont`, and `17HS4401S-DuPont`.

`-XH2.54` and `-DuPont` simply refers to the the type of connector that comes on the end of the cable that connects to the mainboard (the SKR Pico). 

{{< thumbnail src="images/dupont-vs-xh254.png">}}

The white connector is XH2.54 and the black is DuPont. You'll notice in both cases that the cable has at least one white connector. That's because every stepper motor (at least of this type) uses XH2.54 on the motor side. You may also notice that other than the black one being deeper, the pins are spaced out the same. 

It does not matter if you get XH2.54 or DuPont as both can plug in to the same connector on the SKR Pico. The benefit of the XH2.54 is that it will give you a tighter fit that is less likely to come out, but it can only be inserted one direction. The benefit of the DuPont is you can flip it over and still insert it, which is helpful since the wiring for stepper motors isn't a standard. You can also change the connector or replace the cable very easily if you want.

For `17HS4401` vs `17HS4401S`, this again isn't a standard but in the case of the BOM motors, the `S` has some silver banding at the top and bottom while the other one is all black. 

{{< thumbnail src="images/black-vs-silver.png">}}

#### Other motors
There are countless other motors from other brands that may have identical part numbers but different specs. For example, in other cases the `S` designates the pinout order. Or the quality of the motor. Or several other things. The only thing you can really do is look at spec sheets to understand what the difference is. Ultimately it likely doesn't matter. 

The important part is that you can have a max of 38mm for the z-axis (without mods). 

I personally use StepperOnline 17HE15-1504S (for the z-axis) and 17HE19-2004S (for X/Y-axis and Extruder), but there's no reason to think they're better or worse than the ones in the BOM.

### What kind of wiring / how much wiring do I need?
The BOM calls for 2 meters of red and black wires, and the question comes up often what it's for and what size to get.

The only planned place to use those wires is to power the SKR Pico off the PSU. At the most that is 200W at 24v, and it's also a short run. Using a standard wire size calculator and inputting wire length as 30cm, the minimum wire size is 21 AWG. Honestly 30cm is longer than needed -- mine are only 20cm long which only requires 23 AWG -- but builds will vary. 

{{< thumbnail src="images/wire-awg.png">}}

With that said, I would recommend going with 18 AWG silicone insulated cables. 18 AWG is more than enough for anything you would use it for in the printer, and the silicone keeps it nice and flexible. And I would recommend going with 2 meters of each color just so you have extra in case you need it. 


<a href="https://discord.com/channels/1086229147107459133/1089229033243426896/1127250763962404914" target="_blank">Source</a>

## Building FAQ

## Software FAQ
### Which version of Armbian do I download?
Armbian 21.08.1 bananapim2zero bullseye 5.10.60 from armbian bananapim2zero archive. https://www.youtube.com/watch?v=qtmPxSt6baU @ 2:10.

Newer versions have issues to avoid.

## Tuning FAQ


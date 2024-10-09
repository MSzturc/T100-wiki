---
title: "Intro"
ogTitle: "Configuration Intro - THE 100 Build Guide"
description: "How to configure THE 100 v1.1"
lead: ""
date: 2023-08-14T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  the100v11:
    parent: "configure-v11"
    identifier: "intro-configure-v11"
weight: 601
toc: true
doc: the100v11
static_images: true
images: 
  - tfd_the100_preview.png
---
# Configuration
Just like other guides on this site, this guide is intended to go along with Matt's YouTube videos. In this case we're following along with <a href="https://www.youtube.com/watch?v=qtmPxSt6baU" target="_blank">THE 100 Assembly Guide - Part 4: Software Installation</a>

## Requirements 
  * This guide is written with the assumption that you're using a BananaPi M2 Zero (the SBC) and a SKR Pico (the mainboard), as recommended in the BOM. THE 100 will absolutely work with with a different SBC and/or mainboard, but you won't be able to follow the steps exactly. 
  * An SD card. I <b>HIGHLY</b> you purchase a quality SD card rather than using a cheap offbrand one. Cheap flash memory <i>could</i> work fine, or it could be the source of constant gremlins that are impossible to chase down. If you find that you have things working and then suddenly they stop... the SD card is the most likely culprit. A basic 32GB SanDisk ultra can be bought for about $5 on Amazon and will save you so many headaches. 
  * A micro USB to USB A cable that supports data. Some cables are charging only. 
  * A micro USB to USB C cable (or cable with adapter) that supports data. Some cables are charging only.
  * A UART cable for connecting the BPi to the SKR (should have come in the box with the SKR). It should be 5 wires with a XH2.54 (white) connector on one side and DuPont (black) connector on the other. 
  * You need to solder header pins on to the SKR Pico for connecting the UART cable -- at the minimum you need 5 pins in pin 2,4,6,8,10. That isn't covered in this guide
  * A wifi antenna for BPi
  * This guide is currently focused on using macOS (or linux) to do the configuring. I'll get a windows guide created in the future.
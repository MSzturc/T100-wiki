---
title: "Klipper install"
ogTitle: "Klipper Install - THE 100 Build Guide"
description: "How to install Klipper for THE 100"
lead: ""
date: 2023-08-30T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  the100v11:
    parent: "configure-v11"
weight: 611
toc: true
doc: the100v11
images: 
  - images/tfd_toolhead_preview.png
---

# Klipper
The Banana Pi runs klipper which (to simplify things) is your 3d printer's firmware. It reads gcode and passes it along to the printer control board (the SKR Pico). In this step we'll not only install klipper, but also moonraker and fluidd which are used for being able to remotely manage klipper and your printer.

## Requirements 
  * Your Banana Pi (or similar SBC) should have Armbian 21.08.1 with kernel 5.10.60 installed
      * If you followed the steps in <a href="/the100/1.1/configure/armbian-install/">my previous armbian guide</a> then you're all set

The last step in <a href="/the100/1.1/configure/armbian-install/">my armbian guide</a> had you shutdown the BPi. That's because we need to move the power cable from the OTG USB port (the one closer to the middle) to the power-only USB port (the one closest to the side). You can still plug the cable in to your computer for power, but if you have a quality USB wall plug, I would recommend using that instead. 

Plug power in and wait until the red light is flashing to proceed.

## SSH
  1. Open a command prompt/terminal on your computer and type `ssh klipper@192.168.1.120` (but replace my IP with yours)
      - If it has been a significant amount of time since you setup the BPi, and you didn't configure a static IP, then the IP may have changed since you last knew it. You will need to find the new IP to proceed. 
  1. Enter the password for the `klipper` user and you should find yourself at a familiar prompt that says `klipper@bananapim2zero:~$`

## KIAUH
KIAUH (Klipper Installation And Update Helper) is a script that assists you in installing Klipper. It's the easiest method to get things going. 

### Install Klipper
  1. Type `git clone https://github.com/th33xitus/kiauh.git` to copy the KIAUH repo to your BPi
      - {{< thumbnail src="images/kiauh-clone.png">}}
  1. Type `./kiauh/kiauh.sh` to start the install
      - You should now see the main menu
      - {{< thumbnail src="images/kiauh-main-menu.png">}}
  1. Type `1` and hit enter for the install menu
      - You may be prompted for your `klipper` user password. Type it and hit enter.
  1. Type `1` and hit enter to install Klipper itself
  1. Type `1` and hit enter to select `Python 3.x` as the Python version
      - {{< thumbnail src="images/kiauh-python.png">}}
  1. Type `1` and hit enter to indicate you only want one instance of Klipper
  1. The Klipper install process will now begin. Be patient. 
      - There is a lot of data for it to download, extract, and install so expect this to take some time. If anything gets interrupted during this process then you will need to start back from the beginning. 
  1. Once complete you should see ``, and you will then be returned to the installation menu.
      - {{< thumbnail src="images/kiauh-install-menu.png">}}


### Install Moonraker
Klipper on its own just runs locally on the BPi and doesn't give you the ability to manage or control it remotely. Moonraker is a web server that exposes APIs so you (or more practically, your slicer) can interact with Klipper. Note that this is different from a web UI like mainsail or fluidd which we'll also be installing. But those UIs also rely on Moonraker. 

  1. From the installation menu, type `2` for Moonraker and hit enter
  1. You will be asked if you want to install Moonraker. Type `Y` and hit enter. 
      - {{< thumbnail src="images/moonraker-prompt.png">}}
  1. Once again, be patient. This is a large install that takes time.
  1. When the install completes you will see `Moonraker has been set up!` and be returned to the install menu
      - It will also show you the IP and port of the running instance of Moonraker. You can copy/paste that in to your web browser and you should see `Welcome to Moonraker`. You can't actually do anything further from that page, but it's nice to see. 
          - {{< thumbnail src="images/moonraker-landing.png">}}

### Install Fluidd (or mainsail)
Fluidd or mainsail are two very popular options that provide a user interface to Klipper. They are forks of the same software, work nearly the same, and if you understand one then you'll understand the other. I personally use mainsail on one of my printers and fluidd in another. I <i>maybe</i> like fluidd better but they're so similar that it really doesn't matter. Matt install fluidd in his video so I'm going to stick with that just to keep things consistent. 

  1. Select `4` and hit enter to install Fluidd
      - Again, you're welcome to install Mainsail instead. It's a different flavor of the same thing. You just won't be able to follow along with future screenshots. 
  1. After a minute or so you'll e asked if you want to download the recommended macros. Type `Y` and hit enter.
  1. A few seconds later it is done. It should say `Fluidd has been set up!` at the top and you should be back at the install menu
  1. Optional: in your web browser you can go to 192.168.1.120 (replace with your IP!) and you should see the fluidd web interface.
      - It will display an error and not be functional yet, but it should load
      - {{< thumbnail src="images/fluidd.png">}}
  1. Back to the command prompt, type `B` and hit enter to go back
  1. Type 'Q` and hit enter to quit
  1. You should be back at the `klipper@bananapim2zero:~$` prompt before continuing


## Input shaper requirements
The software needed to run input shaper isn't installed by default. We will install them manually.

  1. You should be at the `klipper@bananapim2zero:~$` prompt
  1. Type `sudo apt install python3-numpy python3-matplotlib libatlas-base-dev -y` and hit enter
      - This will take a few minutes to complete
  1. Type `pip3 install oldest-supported-numpy`
      - ℹ️ In Matt's video he specifies installing numpy v1.18, but that version is now giving errors to a lot of people. Use the above command instead. As of this type, the above command will install v1.19.3. I have tested and verified it works as expected with the <a href="https://www.klipper3d.org/Measuring_Resonances.html#measuring-the-resonances_1" target="_blank">calibrate_shaper scripts from klipper</a>.
      - This will take quite a while to complete and may appear frozen at times. Give it at least 30 minutes.
      - {{< thumbnail src="images/numpy.png">}}
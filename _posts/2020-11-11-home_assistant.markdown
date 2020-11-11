
If  you can't get into smarthome devices, I can't blame you.

Getting lights, switches, and other stuff to Just Work can involve tackling bad software, network headeaches, and compatability questions. The solution most people recommend, getting a "smart speaker" from Amazon, Google, or Apple, can leave you screaming at a box to turn off your lights as you're trying to walk out the door.

I don't have a solution to all of these issues. But I have hired an assistant to simplify and manage the devices I do find actually useful. I pay them in electricity. It is [Home Assistant](https://www.home-assistant.io/), running on a [Raspberry Pi](https://www.raspberrypi.org/). I can control all the devices in my house from a browser window or my phone. To me, it is wonderful, and I cannot fathom going back to box-screaming, or a folder full of poorly designed apps on my phone.

![Image from Kevin's Home Assistant setup in a browser window](/assets/post_images/2020-11-11/home_assistant_desktop.png)

I have fewer smarthome devices in my D.C. apartment than I had in my large Buffalo house, but Home Assistant scales to whatever amount of nerdery you want to get into. You can, like me, simply have a panel of temperatures, switches, and some beginner automation. I have my lights gradually turn on in the morning, and I get an alert whenever the temperature in any room is over 77 degrees or below 64 degrees, so I can better avoid turning on the heat or A/C. I also get an alert whenever the battery in mine or my wife's smartphone gets below 30 percent, but that's a me thing.

![Image from Kevin's Home Assistant setup on phone](/assets/post_images/2020-11-11/home_assistant_phone.png)

If you want to go deeper, there are if/then scripts, automations, tons of panel design options, and support for way, way more kinds of devices than any one speaker can offer. You can set up sunrise/sunset actions based not just on each day's timing, but the precise angle of the sun. Is this not enough? Heck, you can do what I thought I was going to do and put an always-on wall-mounted control panel up. I mean, there's a YAML file involved, nerds, nobody's stopping you!

![TK TK image of wall-mounted control panel]()

But you really don't have to get nerdy. The main thing Home Assistant does for me is help me _avoid_ fighting with the default smarthome options. I don't have to use a phone folder packed with slow-loading smarthome apps (Hue, Wemo, SmartThings, Sonos, "Smart Life"), each with wildly different designs, to simply turn things on or off. And I don't have to try and bend any of the big three smarthome speakers (Amazon Alexa, Google Home, Apple Homekit) or their apps to simply show me all my devices and let me manipulate them.[^1]

Home Assistant takes all the complexities offered by each device and offers you, instead, a very simple switch, a slider, maybe a little icon. Instead of talking to each member of the Downton staff individually, you just tell Mr. Carson how you'd prefer things to work.

If you're familiar with this kind of how-to blog post style, or with Raspberry Pi projects in general, you might be asking yourself, "Is this one of those posts that's full of terminal commands?" It is not. You will download an image, write it to a micro SD card, start up a Raspberry Pi, and then use a browser to set up your new device. The worst-case scenario is that you decide you don't like Home Assistant, and you're stuck with a leftover Raspberry Pi. To most people who would bother to set this kind of thing up, that's a quiet blessing. "Oh, I'm so sorry," imagine me saying. "I tricked you into buying the world's coolest [video game emulator](https://www.raspberrypi.org/blog/retropie-for-raspberry-pi-4-video-game-emulation-on-our-fastest-ever-device/), network-wide [ad blocker and privacy tool](https://pi-hole.net/), [personal VPN](https://www.pcmag.com/how-to/how-to-create-a-vpn-server-with-raspberry-pi), backup [personal computer](https://www.forbes.com/sites/barrycollins/2020/11/02/raspberry-pi-400-a-full-blown-computer-for-86/), truly, please, forgive me."

Let's get into it.

## Get a Pi, flash an image, boot it up

At the moment, you can run Home Assistant on a Raspberry Pi 3B or 3B+, a 4B, a Tinkerboard, Odroid, or Intel NUC. If you're reading this far after fall 2020, or you're not sure, check the [installation page](https://www.home-assistant.io/hassio/installation/). Note that the easy, default installation takes over your Pi and does not give you a desktop to work with; everything is managed through a web broswer. There are ways of [running Home Assistant in a Docker](https://www.home-assistant.io/docs/installation/docker/) or, probably, as a service, but I'm not getting into them here. I like the simplicity of a tiny device, doing one thing, plugged into a router.

Yes, a router. A Home Assistant setup, and a Pi in general, works a lot easier if you can plug it into your network using an ethernet cord. For most people, this means setting it up near their home router. Otherwise, an attached ethernet port, a network extender, power

***



[^1]: Google Home's app is probably the closest you can get to Home Assistant without actually setting up Home Assistant, but trying to remove duplicates, set up "rooms," and work out a bunch of phrases to say to Google Assistant to manage my devices is exactly what drove me to look for this alternative.
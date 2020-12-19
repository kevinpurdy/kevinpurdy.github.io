I love smarthome stuff. Lights fading in at sunset, knowing the temperature in each room, a routine that plays NPR for the dog when we leave? Heck yeah.

But I cannot stand using a dozen apps, with interfaces ranging from "overdone" to "awkward" to "semi-translated barely cohesive spyware." I also do not want to memorize a bunch of very specific phrases to yell at Alexa. And, if possible, I do not want to feel like I've given up on privacy, just because I want to turn on the humidifier 30 minutes before I go to bed.

I'll get right to it, I found a solution. Yes, it involves a [Raspberry Pi](https://www.raspberrypi.org/), okay, you got me. But just look at this dashboard I now have on my phone, in a browser, anywhere, really. Just look at it.

![Image from Kevin's Home Assistant setup in a browser window](/assets/post_images/2020-11-11/home_assistant_desktop.png)

This is [Home Assistant](https://www.home-assistant.io/). If all you want is switches and monitors for all your stuff, in one app, it can do that. It does that with more style than the Google Home, Alexa, or HomeKit happs, I think. As you can see above, I've got switches for my Hue lights and Wemo outlets, readings for my SmartThings sensors, and media controls for Sonos speakers, a soundbar, and the TV.

Looks good on a phone, too.

![Image from Kevin's Home Assistant setup on a phone app](/assets/post_images/2020-11-11/home_assistant_phone.jpg)

Oh, but you like to get deep, huh? Home Assistant's got depth. My lights don't just turn on in the morning—not even at "sunrise." They turn on when the sun is at a specific angle over the horizon, based on [civil dawn](https://www.timeanddate.com/astronomy/civil-twilight.html). My lights blink whenever the battery level is below 30 percent in my or my wife's phone. And, real casually, my Home Assistant is also a [DuckDNS](https://duckdns.org) client and a private [WireGuard VPN](https://www.wireguard.com/).

And I'm not even close to the deep end here. I've seen people in forums and subreddits using Home Assistant for [presence detection](https://www.home-assistant.io/getting-started/presence-detection/), camera monitoring, having your [speakers announce people's arrival](https://www.home-assistant.io/cookbook/sonos_say/), and [lots of other stuff](https://www.home-assistant.io/cookbook/). Do you get a little bit jazzed when you read the phrase "YAML file" or "Zigbee?" Here's a place to get wild.

I'll walk through a basic setup in this post, but you could also rely on the first two pages of the [Getting Started guide](https://www.home-assistant.io/getting-started/). Maybe I can provide some context.

## The Simple Version: A Pi and Some Switches

You might be asking yourself, "Is this one of those posts that's full of terminal commands?" You're not wrong to wonder, but it is not. You will download an image, write it to a micro SD card, load that card into a Raspberry Pi, boot it up, and then use a browser for everything 

The worst-case scenario is that you decide you don't like Home Assistant, and you're stuck with a leftover Raspberry Pi. If you're the type who would bother trying to set this kind of thing up, well, that's really not a punishment. "Oh, I'm so sorry," you might imagine me saying. "I tricked you into buying the world's coolest [video game emulator](https://www.raspberrypi.org/blog/retropie-for-raspberry-pi-4-video-game-emulation-on-our-fastest-ever-device/), network-wide [ad blocker and privacy tool](https://pi-hole.net/), [personal VPN](https://www.pcmag.com/how-to/how-to-create-a-vpn-server-with-raspberry-pi), and backup [personal computer](https://www.forbes.com/sites/barrycollins/2020/11/02/raspberry-pi-400-a-full-blown-computer-for-86/). Truly, please, I beg your forgiveness.""

Let's get into it.

### Get a Pi and some stuff

As I write this, you can run Home Assistant on a Raspberry Pi 3B or 3B+, a 4B, a Tinkerboard, Odroid, or Intel NUC. If you're reading this long after fall 2020, or if you're not sure, check the [installation page](https://www.home-assistant.io/hassio/installation/). Note that the easy, default installation takes over your Pi and does not give you a desktop to work with; everything is managed through a web broswer. There are ways of [running Home Assistant in a Docker](https://www.home-assistant.io/docs/installation/docker/) or, probably, as a service, but I'm not getting into them here. I like the simplicity of a tiny device, doing one thing, plugged into ethernet.

If you're buying a new Pi, you should probably buy a kit rather than just the board. You want a power supply and case at a minimum. Some kits come with heat sinks--nice, but not strictly necessary. You'll need a micro SD card, too; some kits come with one, or you can buy one. Home Assistant says you should get one that is rated Application Class 2. Probably not a bad idea, probably [not strictly necessary](https://www.jeffgeerling.com/blog/2019/a2-class-microsd-cards-offer-no-better-performance-raspberry-pi). You don't need a USB keyboard and mouse, or even a micro-HDMI cable or dongle, though having those isn't an awful idea.

Oh, and, yes, an ethernet cable. A Home Assistant setup, and a Pi in general, works a lot easier if you can plug it into your network using an ethernet cord. For most people, this means setting it up near their home router. If you don't have a working ethernet cord to plug in, you can follow [step 4 on the Installation page](https://www.home-assistant.io/getting-started/) to set up Wi-Fi. The setup isn't too bad; it's the chance for Wi-Fi hiccups that's a pain.

### Flash it

[Balena Etcher](https://www.balena.io/etcher/) is great software. Download it, install it, open it on any computer, Windows, Mac, or even Linux. Download the [right Home Assistant image for your Pi](https://www.home-assistant.io/hassio/installation/). On the left-most side of Balena, pick that file. In the midddle section, choose the micro SD card. Hit the Flash button, and let Balena do its thing.

When you've got your card flashed, put it in the Pi. Plug the ethernet cable into the Pi (or put the USB stick with the Wi-Fi setup in it, or modify the SD card with the Wi-Fi details, detailed in [step 3 here](https://www.home-assistant.io/hassio/installation/)). Plug in the Pi's power cable, and when you then plug it into the Pi, it will boot up (a little orange-red light shows this).

### Set it up

Here's where it might seem weird. On most Raspberry Pi setups, you want to have the Pi connected to a TV or monitor, and have a USB keyboard and mouse ready to walk through an initial setup. Home Assistant, once you've flashed it and it boots up, is managed through a browser.

Give Home Assistant some time to boot up. When it's awake, it downloads updates to its system, which can take a while. After 5-10 minutes, open a browser on another computer/tablet/whatever and, while you're connected to the same network as the Pi, try to browse to `homeassistant.local:81223`. If it works, you see the Home Assistant setup screen. 


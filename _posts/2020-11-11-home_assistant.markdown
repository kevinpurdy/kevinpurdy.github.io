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

## The Simple Version: A Pi, Some Switches, A Phone

You might be asking yourself, "Is this one of those posts that's full of terminal commands?" You're not wrong to wonder, but it is not. You will download an image, write it to a micro SD card, load that card into a Raspberry Pi, boot it up, and then use a browser for everything 

The worst-case scenario is that you decide you don't like Home Assistant, and you're stuck with a leftover Raspberry Pi. If you're the type who would bother trying to set this kind of thing up, well, that's really not a punishment. "Oh, I'm so sorry," you might imagine me saying. "I tricked you into buying the world's coolest [video game emulator](https://www.raspberrypi.org/blog/retropie-for-raspberry-pi-4-video-game-emulation-on-our-fastest-ever-device/), network-wide [ad blocker and privacy tool](https://pi-hole.net/), [personal VPN](https://www.pcmag.com/how-to/how-to-create-a-vpn-server-with-raspberry-pi), and backup [personal computer](https://www.forbes.com/sites/barrycollins/2020/11/02/raspberry-pi-400-a-full-blown-computer-for-86/). Truly, please, I beg your forgiveness.""

Let's get into it.

## Get a Pi, flash an image, boot it up

At the moment, you can run Home Assistant on a Raspberry Pi 3B or 3B+, a 4B, a Tinkerboard, Odroid, or Intel NUC. If you're reading this far after fall 2020, or you're not sure, check the [installation page](https://www.home-assistant.io/hassio/installation/). Note that the easy, default installation takes over your Pi and does not give you a desktop to work with; everything is managed through a web broswer. There are ways of [running Home Assistant in a Docker](https://www.home-assistant.io/docs/installation/docker/) or, probably, as a service, but I'm not getting into them here. I like the simplicity of a tiny device, doing one thing, plugged into a router.

Yes, a router. A Home Assistant setup, and a Pi in general, works a lot easier if you can plug it into your network using an ethernet cord. For most people, this means setting it up near their home router. Otherwise, an attached ethernet port, a network extender, power

***



[^1]: Google Home's app is probably the closest you can get to Home Assistant without actually setting up Home Assistant, but trying to remove duplicates, set up "rooms," and work out a bunch of phrases to say to Google Assistant to manage my devices is exactly what drove me to look for this alternative.
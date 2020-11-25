
If  you can't get into smarthome devices, I can't blame you.

Getting your stuff to Just Work can mean tackling bad software, network headaches, and compatability questions. The solution most people recommend, using a "smart speaker" as a hub, can mean screaming at a box to turn off your lights as you're trying to walk out the door.

I don't have a true solution to all of these issues. But I have hired an assistant to simplify and manage the devices I do find actually useful. I pay them in electricity. It is [Home Assistant](https://www.home-assistant.io/), running on a tiny [Raspberry Pi](https://www.raspberrypi.org/) computer. I pay it in electricity and give it the run of my network. In return, it talks to all the "smart" devices in my house. Home Assistant is efficient, stylish, and far more privacy-minded than anything from Google, Amazon, or (maybe) Apple. I cannot fathom going back to box-screaming, or a folder full of poorly designed apps on my phone.

![Image from Kevin's Home Assistant setup in a browser window](/assets/post_images/2020-11-11/home_assistant_desktop.png)

Home Assistant scales to however many devices you have, and to whatever level of fiddling you wish to drill. As you can see above, I have:

+ Switches for Hue lights and Wemo switches
+ Temperature readings for 3 SmartThings sensor buttons
+ Media controls for Sonos speakers, soundbar, and TV

That might be all some folks want or need. Getting that set up is downloading an image, flashing it, booting up the Pi with it, authorizing those devices, and creating your panel. I'll walk through this basic setup in this post, but you could also rely on the first two pages of the [Getting Started guide](https://www.home-assistant.io/getting-started/). Maybe I can provide some context.

But, trust me, you can get wild if you want. Underneath the hood, I have Add-Ons, Automations, Scenes, and Integrations running that let me do some quirky stuff:

+ Automate the lights turning on in the morning--not just "at sunrise," but when the sun is at a specific angle over the horizon at my exact latitude/longitude.
+ Have certain lights blink whenever mine or my wife's phone battery level goes below 40 percent.
+ Keep a dynamic DNS address updated
+ Run a little personal VPN for when my phone is on public Wi-Fi

And I'm not even close to the deep end here. I've seen people in the forums and subreddits using Home Assistant for [presence detection](https://www.home-assistant.io/getting-started/presence-detection/), camera monitoring, having your [speakers announce people's arrival](https://www.home-assistant.io/cookbook/sonos_say/), and [lots of other stuff](https://www.home-assistant.io/cookbook/). If you're a veteran of wonky open-source projects, you'll know what I'm talking about when I say there are YAML files, Z-Wave and Zigbee integrations.

![Image from Kevin's Home Assistant setup on phone](/assets/post_images/2020-11-11/home_assistant_phone.png)

![TK TK image of wall-mounted control panel]()

My favorite thing about Home Assistant is what it isn't: a folder full of apps made by companies that really shouldn't make apps. I don't have to open slow-loading apps with wildly different designs just to turn on lights or adjust volumes or set up automations. I used to try and escape this by putting everything into an app from the Big Three (Amazon Alexa, Google Home, Apple HomeKit), but they all stink in their own way. Why does this outlet switch show up three times? Why do I have to constantly worry about duplicate names the speaker can't understand? Is this fun, at all?

Home Assistant takes all the complexities offered by each device and offers you, instead, a very simple switch, a slider, maybe a little icon. Instead of talking to each member of the Downton staff individually, you just tell Mr. Carson how you'd prefer things to work.

## The Simple Version: A Pi, Some Switches, A Phone

If you're familiar with this kind of how-to blog post style, or with Raspberry Pi projects in general, you might be asking yourself, "Is this one of those posts that's full of terminal commands?" It is not. You will download an image, write it to a micro SD card, start up a Raspberry Pi, and then use a browser to set up your new device. The worst-case scenario is that you decide you don't like Home Assistant, and you're stuck with a leftover Raspberry Pi. To most people who would bother to set this kind of thing up, that's a quiet blessing. "Oh, I'm so sorry," imagine me saying. "I tricked you into buying the world's coolest [video game emulator](https://www.raspberrypi.org/blog/retropie-for-raspberry-pi-4-video-game-emulation-on-our-fastest-ever-device/), network-wide [ad blocker and privacy tool](https://pi-hole.net/), [personal VPN](https://www.pcmag.com/how-to/how-to-create-a-vpn-server-with-raspberry-pi), backup [personal computer](https://www.forbes.com/sites/barrycollins/2020/11/02/raspberry-pi-400-a-full-blown-computer-for-86/), truly, please, forgive me."

Let's get into it.

## Get a Pi, flash an image, boot it up

At the moment, you can run Home Assistant on a Raspberry Pi 3B or 3B+, a 4B, a Tinkerboard, Odroid, or Intel NUC. If you're reading this far after fall 2020, or you're not sure, check the [installation page](https://www.home-assistant.io/hassio/installation/). Note that the easy, default installation takes over your Pi and does not give you a desktop to work with; everything is managed through a web broswer. There are ways of [running Home Assistant in a Docker](https://www.home-assistant.io/docs/installation/docker/) or, probably, as a service, but I'm not getting into them here. I like the simplicity of a tiny device, doing one thing, plugged into a router.

Yes, a router. A Home Assistant setup, and a Pi in general, works a lot easier if you can plug it into your network using an ethernet cord. For most people, this means setting it up near their home router. Otherwise, an attached ethernet port, a network extender, power

***



[^1]: Google Home's app is probably the closest you can get to Home Assistant without actually setting up Home Assistant, but trying to remove duplicates, set up "rooms," and work out a bunch of phrases to say to Google Assistant to manage my devices is exactly what drove me to look for this alternative.
I love smarthome stuff. Lights fading in at sunset, knowing the temperature in each room, a routine that plays NPR for the dog when we leave? Heck yeah.

But I cannot stand using a dozen apps, with interfaces ranging from "overdone" to "awkward" to "semi-translated barely cohesive spyware." I also do not want to memorize a bunch of very specific phrases to yell at Alexa. And, if possible, I do not want to feel like I've given up on privacy, just because I want to turn on the humidifier 30 minutes before I go to bed.

I found a solution. Yes, it involves a [Raspberry Pi](https://www.raspberrypi.org/)—okay, you got me. But just look at this dashboard I now have on my phone, in a browser, anywhere, really. Just look at it.

![Image from Kevin's Home Assistant setup in a browser window](/assets/post_images/2020-11-11/home_assistant_desktop.png)

This is [Home Assistant](https://www.home-assistant.io/). If all you want is switches and monitors for all your stuff, in one app, it can do that. It does that with more style than the Google Home, Alexa, or HomeKit happs, I think. As you can see above, I've got switches for my Hue lights and Wemo outlets, readings for my SmartThings sensors, and media controls for Sonos speakers, a soundbar, and the TV.

Looks good on a phone, too.

![Image from Kevin's Home Assistant setup on a phone app](/assets/post_images/2020-11-11/home_assistant_phone.jpg)

Oh, but you like to get deep, huh? Home Assistant's got depth. My lights don't just turn on in the morning—not even at "sunrise." They turn on when the sun is at a specific angle over the horizon, based on [civil dawn](https://www.timeanddate.com/astronomy/civil-twilight.html). My lights blink whenever the battery level is below 30 percent in my or my wife's phone. And, real casually, my Home Assistant is also a [DuckDNS](https://duckdns.org) client and a private [WireGuard VPN](https://www.wireguard.com/).

And I'm not even close to the deep end here. I've seen people in forums and subreddits using Home Assistant for [presence detection](https://www.home-assistant.io/getting-started/presence-detection/), camera monitoring, having your [speakers announce people's arrival](https://www.home-assistant.io/cookbook/sonos_say/), and [lots of other stuff](https://www.home-assistant.io/cookbook/). Do you get a little bit jazzed when you read the phrase "YAML file" or "Zigbee?" Here's a place to get wild.

I'll walk through a basic setup in this post. You could also rely on the first two pages of the [Getting Started guide](https://www.home-assistant.io/getting-started/), and there are other web guides out there. Many of them are a bit dated, though. And maybe I can provide some context.

## Get Started

You might be asking yourself, "Is this one of those posts that's full of terminal commands?" You're not wrong to wonder, but it is not. You will download an image, write it to a micro SD card, load that card into a Raspberry Pi, boot it up, and then use a browser for everything 

The worst-case scenario is that you decide you don't like Home Assistant, and you're stuck with a leftover Raspberry Pi. If you're the type who would bother trying to set this kind of thing up, well, that's really not a punishment. "Oh, I'm so sorry," you might imagine me saying. "I tricked you into buying the world's coolest [video game emulator](https://www.raspberrypi.org/blog/retropie-for-raspberry-pi-4-video-game-emulation-on-our-fastest-ever-device/), network-wide [ad blocker and privacy tool](https://pi-hole.net/), [personal VPN](https://www.pcmag.com/how-to/how-to-create-a-vpn-server-with-raspberry-pi), and backup [personal computer](https://www.forbes.com/sites/barrycollins/2020/11/02/raspberry-pi-400-a-full-blown-computer-for-86/). Truly, please, I beg your forgiveness.""

Let's get into it.

### Get a Pi and some stuff

As I write this, you can run Home Assistant on a Raspberry Pi 3B or 3B+, a 4B, a Tinkerboard, Odroid, or Intel NUC. If you're reading this long after fall 2020, or if you're not sure, check the [installation page](https://www.home-assistant.io/hassio/installation/). Note that the easy, default installation takes over your Pi and does not give you a desktop to work with; everything is managed through a web broswer. There are ways of [running Home Assistant in a Docker](https://www.home-assistant.io/docs/installation/docker/) or, probably, as a service, but I'm not getting into them here. I like the simplicity of a tiny device, doing one thing, plugged into ethernet.

If you're buying a new Pi, you should probably buy a kit rather than just the board. You want a power supply and case at a minimum. Some kits come with heat sinks—nice, but not strictly necessary. You'll need a micro SD card, too; some kits come with one, or you can buy one. Home Assistant says you should get one that is rated Application Class 2. Probably not a bad idea, probably [not strictly necessary](https://www.jeffgeerling.com/blog/2019/a2-class-microsd-cards-offer-no-better-performance-raspberry-pi). You don't need a USB keyboard and mouse, or even a micro-HDMI cable or dongle, though having those isn't an awful idea.

Oh, and, yes, an ethernet cable. A Home Assistant setup, and a Pi in general, works a lot easier if you can plug it into your network using an ethernet cord. For most people, this means setting it up near their home router. If you don't have a working ethernet cord to plug in, you can follow [step 4 on the Installation page](https://www.home-assistant.io/getting-started/) to set up Wi-Fi. The setup isn't too bad; it's the chance for Wi-Fi hiccups that's a pain.

### Flash it

[Balena Etcher](https://www.balena.io/etcher/) is great software. Download it, install it, open it on any computer, Windows, Mac, or even Linux. Download the [right Home Assistant image for your Pi](https://www.home-assistant.io/hassio/installation/). On the left-most side of Balena, pick that file. In the midddle section, choose the micro SD card. Hit the Flash button, and let Balena do its thing.

When you've got your card flashed, put it in the Pi. Plug the ethernet cable into the Pi (or put the USB stick with the Wi-Fi setup in it, or modify the SD card with the Wi-Fi details, detailed in [step 3 here](https://www.home-assistant.io/hassio/installation/)). Plug in the Pi's power cable, and when you then plug it into the Pi, it will boot up (a little orange-red light shows this).

### Set it up

Here's where it might seem weird. On most Raspberry Pi setups, you want to have the Pi connected to a TV or monitor, and have a USB keyboard and mouse ready to walk through an initial setup. Home Assistant, once you've flashed it and it boots up, is managed through a browser.

Follow [Home Assistant's setup guide](https://www.home-assistant.io/getting-started/), it's good. The guide at [Pi My Life Up](https://pimylifeup.com/home-assistant-raspberry-pi/) has more screenshots and some tricks to try if your browser doesn't show a setup screen.

When you get to the screen showing the devices and services Home Assistant sees already, set up as many as you can then. It's helpful to have some objects to work with when you're first designing your panels. 

Some stuff will set up without any help at all, some will require username/password authentication, and some might be a royal pain in the butt. My SmartThings stuff required the creation of a webhook inside Home Assistant, which itself requires an API key from Samsung, a dynamic DNS tracker, an SSL certificate, port forwarding in the router ... it's a lot. My Logi camera requires that I ask the developers personally to open up an API spot for me, through a Google Form (!). I still haven't heard back on that one.

Anyways! Set up what you can, hit "Finish" at the bottom of that page, and, BOOM, you've got a panel.

## The Basics: Control Your Smarthome Stuff

![Home Assistant Overview panel](/assets/post_images/2020-11-11/overview.png)

Here's something confusing about Home Assistant: the first panel you see, "Overview," is not the one you should mess with. "Overview" is a meta panel, updated by Home Assistant itself, that shows you everything Home Assistant can work  with: rooms, scenes, devices, and weird little details about each thing. You can mess with it if you want, but it's better to create your own dashboard, make it the default, and have Overview to fall back on, if you muck things up too bad.

Instead of trying to edit Overview, head down to "Configuration" in the lower part of the left-hand control panel, then scroll down to look for "Lovelace Dashboards." You'll see "Overview" as the only option here. Click the big "Add Dashboard" button in the lower-right corner. Give it a title, make sure "Show in sidebar" is toggled on at the bottom, and click "Create." (Don't worry about icons right now, we'll get to that in a bit). Your new panel will look exactly like the Overview panel. Click the three overflow dots in the upper-right corner, choose "Edit dashboard." You'll get a warning that Home Assistant is currently maintaining this, but it's fine. You'll probably want to toggle the "Start with an empty dashboard" option at bottom, then click "Take control."

Now you've got ... nothing! Click the "+" button in the top bar to create your first "View." You'll probably only want one view, so just name this "Basic" or "Default" or whatever, then hit "Save." Now you have an "Add Card" button on your otherwise blank panel. Click it.

It's time to think about what you want to do with your Home Assistant setup. You can organize your home stuff however you want. You could group all the lights, like I have, or you could group them by room, so it's easy to turn off, say, all your living room lights, all the downstairs lights, etc. If you're a heat miser like me, you can see all your room temperatures, and if you had a smart thermostat, put the control in there, too.

You can add stuff either by choosing a pre-designed card, or pick the "entities" in your house and toss them in as a starting point. It may take some experimentation to figure out exactly which things you want in each panel. Some things in your smarthome may also have more than one "entity" attached. My TV has an entity that is just a power switch for the TV itself, and a media player entity that lets me control volume, pause playback, and such.

I think it's easier to start off by searching for entities. Generally, if you want more detailed control of one thing, select it alone, then click "continue" to see a suggested panel.

![Lamp control with dial](/assets/post_images/2020-11-11/panel_card_detail.png)

Or select a few different entities, and let Home Assistant create a multi-entity card. I like to enable the "Color icons based on state?" control for most cards.

![Selecting entities for a Home Assistant card](/assets/post_images/2020-11-11/panel_card_0.png)

![Multi-entity card in Home Assistant](/assets/post_images/2020-11-11/panel_card_1.png)

It's easy to add too many controls to your home screen. Keep in mind that you can tap any entity to get more detailed controls.

![Detailed view of an entity](/assets/post_images/2020-11-11/panel_card_2.png)

You can also create more specific views. For instance, I can create another view, "Lights," that shows the dimming controls and big on/off buttons for each one.

!["Lights" panel in a Home Assistant dashboard](/assets/post_images/2020-11-11/panel_card_3.png)

You've got the hang of it now. You can always come back to this editor screen and add or remove entities from cards, change card types, and, as you'll see below, fine-tune the look and feel.

### Icons and badges

For most entities, Home Assistant has a default icon that makes sense and looks spiffy. Lights have light bulbs, switches have little lightning/power bolts, battery levels have batteries. But you might want to customize them, to better know at a glance which is which, or just scratch your customization itch.

Let's fix up this card I for the Tile Bluetooth tracker I have on my keys. By default, it's four tiles—clever, Home Assistant. But let's say I have one in my wallet, so I want a quick-glance distinction. Click on the item you want to change, then click the gear icon in the upper-right corner of the detailed view that pops up.

There's an "Icon" field, but it's ... text? Yes. Home Assistant has you choose icons from the [Material Design project](http://materialdesignicons.com/). head to that site, choose the "Cheatsheet" option on the top panel, and Control/Command-F search the page for the icon you want. I liked `mdi-wallet` on there, for example. In Home Assistant entities, you replace the `-` with a colon, `:`. So I enter `mdi:wallet` in the Icon field, and it shows up just to the right of that field, to prove it works.

![Custom Material Design icons in a Home Assistant card](/assets/post_images/2020-11-11/tile_icons.png)

There's one more thing you can mess with, besides cards. You can see in the "Overview" view that there's a whole bunch of little circular tiles at the top of the window. You can add them to your own view, too, maybe not where you would expect to. Open your panel, click the three-dot menu, choose "Edit Dashboard." Click the pencil icon next to the view you want to edit. One of the sub-sections is "Badges." That's what those text-only circles are, Badges.

![Badgets on a Panel view in Home Assistant](/assets/post_images/2020-11-11/badges.png)

The thing to keep in mind is that you can't manipulate  any of these Badges. You can click them for more detail; that's helpful for the weather, for example, or devices for which you want a history graph.

If you stopped here, you'd have a webapp that lets you control your home from your local network, using a no-nonsense panel you designed yourself. Not bad!

But I did not stop here.

## What Else You Can Do with Home Assistant

For the built-in things you can explore with Home Assistant—Scenes, Routines, Areas, Scripts, Tags, People tracking—you should rely on the [official Home Assistant documentation](https://www.home-assistant.io/docs/). It's good.

I'm going to briefly note here the stuff that I've packed into my own Home Assistant, and some tips on how I got them working.

### Install phone/tablet apps

The iOS and Android apps for Home Assistant aren't just a quick way to get to your web panel, though they are that, too. They're also a way for Home Assistant to [send you notifications about smarthome things](https://companion.home-assistant.io/docs/notifications/notifications-basic). You can even [make those notifications actionable](https://companion.home-assistant.io/docs/notifications/actionable-notifications).

My favorite part, though, is that, if you grant the permissions, Home Assistant can use the data from your phone. I can't even fit all the things your phone can report back to Home Assistant in one screenshot, but here's a few highlights (with some variance between iPhones and Android):

+ Battery level (%), health, state (charging, not charging), charging type (wireless/wired)
+ Wi-Fi network and LTE connection
+ Floors ascended/descended, steps walked
+ Location, last update

### Install File Editor, Samba, and other add-ons

If you're going to dive deeper into Home Assistant, you'll need to edit some config files. Head into the Supervisor menu in the left-hand sidebar. Click the "Add-on Store" heading (or the storefront-style icon). Look or search for "File editor," then click and follow through to add it to Home Assistant. After it's done installing, you might want to enable the "Show in sidebar" option on its "Info" page.

You can also install a Samba add-on, which would (theoretically) allow other computers on your network to find your Home Assistant and browse or edit its files. Samba is a finicky protocol, but it's there if you want it. If you know what SSH is, and can securely set up access for yourself, that's an easy add-on, too.

### Move your logs (and learn how to back up your system)

Home Assistant is a server. As such, it logs everything that is happening, so that you might spot problems and tweak performance. Which is fine, but most people are going to run their Home Assistant from the micro SD card they've got plugged into their Raspberry Pi. Micro SD cards die faster with frequent writing.

I can't say for certain whether this will matter for you, but once you have your Home Assistant set up, it's not a bad idea to prevent the system's storage from burning through your card. You have a few options:

+ **Use a USB stick** for your Assistant's storage. [This rather intenstive post explains how](http://blog.ceard.tech/2017/10/home-assistant-moving-logs-and-database.html)
+ Buy a **class A1 or A2 micro SD card**, since they are rated to last for years with gazillions of writes.
+ Do what I did: cut down what is logged, shorten the time logs are kept, and **move your logs to the system's memory**. Since your Assistant is always-on, you can still access your logs, and they won't impact your system RAM much.

You'll want to install the File Editor add-on mentioned in the last section to monkey with `configuration.yaml`. **Before you do that, you ~~should~~ _must_ take a snapshot backup.** It's a couple clicks to recreate all the connections and settings inside your Assistant and download it from a browser. Do it before any notable monkeying around, running updates, and every so often, just because.

In your Home Assistant sidebar, click Supervisor, then the "Snapshots" tab at the top. Give your snapshot a name (maybe with a date, too, like `2020-12-29-Home-Assistant`), password protect it if you want, and make it. Click on any of your snapshots in the gallery on this page, download them, put them somewhere safe.

Okay, now that you've got a fallback in case a typo in a config file ruins everything (kidding! kinda!), open up that File Editor from the sidebar (or Supervisor->Add-on Store, File Editor, Open Web UI if it's not there). Click the file icon in the upper-left corner when the editor opens. Click `configuration.yaml` from the list. 

In your configuration file, there should be a `recorder:` section header. Underneath that header, but indented two spaces, add `db_url: 'sqlite:///:memory:'`, as [suggested by this helpful Reddit commenter](https://www.reddit.com/r/homeassistant/comments/jvwtv1/friendly_reminder_dont_use_a_sd_card_on_a_pi/gcmrr8v/). Later in that same thread, he suggests purging your log files after 3 days' time, and excluding the really esoteric stuff Home Assistant logs, like when the position of the sun changes. So here's taylen123's recorder segment in `configuration.yaml`, pasted from their comment:

```
recorder:
  db_url: 'sqlite:///:memory:'
  purge_keep_days: 3
  exclude:
    domains:
      - automations
      - weblink
      - updater
    entities:
      - sun.sun
      - sensor.last_boot
      - sensor.date
      - weather.home
      - weather.dark_sky
```
Save the file when you're done (the red "disk" button in the upper-right corner). Make sure you've got your snapshot backup downloaded, then reboot your Home Assistant (Supervisor->System->Host System->Reboot). If it works ... nothing changes, really. You might check on your System Metrics every so often to make sure your RAM usage is okay. On my Pi 4 with 4 GB, I've rarely used more than 24% memory. 

## Set Up External Access

You can use Home Assistant when you're on your home network, and that's fine. You might not need access to your server when you're away from home, or you might have another solution, like a VPN (which is easy to install with Wireguard). If so, you never need to dive into this murky realm.

But if you do need to open up Home Assistant, whether for access or to enable a webhook or something else, you can do so. The easiest way to securely access Home Assistant from any device, anywhere, is to pay $5 per month to [Nabu Casa](https://www.nabucasa.com). Nabu Casa is a sponsor of Home Assistant, they're very serious about security and data privacy, and their service makes enabling remote access and all kinds of hardware access very easy. It also unlocks some [cool text-to-speech stuff](https://www.home-assistant.io/blog/2020/12/13/release-202012/#new-neural-voices-for-nabu-casa-cloud-tts).

Like it says on their site, using Nabu Casa means:

> You don't have to deal with dynamic DNS, SSL certificates or opening ports on your router.

But what if, like me, you hate yourself, you value victory over inanimate objects more than your free time, and you "love" a "challenge"? Then let's get into it!

My setup was probably different than yours: router, ISP, home network setup, etc. But the broad tasks for enabling remote access are:

+ Give your Home Assistant/Raspberry Pi a static IP address on your home network.
+ Get a [free DuckDNS account](https://www.duckdns.org/).
+ [Install the DuckDNS add-on in Home Assistant and configure it](https://techtechandmoretech.com/guides/hass-duckdns/) (I didn't need to do the port 80 configuration suggested by this guide, but your results may vary).
+ Open a port on your router and forward it to Home Assistant's static address and the Home Assistant port (8123).
+ Connect to Home Assistant now through that DuckDNS URL and whatever port you forwarded to HA: `something.duckdns.org:1234` or whatnot.

The best advice I can give on this process is to avoid any rabbit holes you see about connecting to Home Assistant securely on both your internal and external network. Once you set up an external URL with a valid certificate, Home Assistant cannot serve up a valid certificate for your local network connection. You might find some posts suggesting a setup using the `nginx` add-on to create an SSL proxy. But, listen, you just wanted to control your lights and thermostat, right? That way lies madness.

Just bookmark and connect to your Home Assistant through your DuckDNS address, and then donate to [DuckDNS](https://duckdns.org) and [Let's Encrypt](https://letsencrypt.org/donate/) for making the web secure for everyone, including you and your weird home automation project.

***

By all means, let me know if you:

+ find any issues with my Home Assistant advice
+ spot any typos or dead links
+ have some cool Home Assistant stuff to show off

I hope you enjoy this tiny computer project at least half as much as I have.






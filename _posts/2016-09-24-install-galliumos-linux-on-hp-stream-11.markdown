---
layout: post
title: Make the HP Stream 11 into a Linux Crapbook
published: true
---

### Or, how to install GalliumOS, a very lightweight Ubuntu-ish Linux OS, on the HP Stream 11 and make it useful again

_If you want to skip all the prose and get right to installing GalliumOS on the Stream 11, <a href="#howto">you can do so</a>._

![Hey, look, it's the HP Stream 11, running Linux!](/assets/post_images/2016-09-24/top_image2.jpg)

A family friend recently gave my wife and I a laptop. It was not a gift, but a surrender. This laptop, she told my wife, "Just doesn't work," and was "a mistake." I have three pets from a shelter and a weird affection for old laptops, so I took the odd little slab under my wing.

That slab is the [HP Stream 11](http://store.hp.com/webapp/wcs/stores/servlet/ContentView?eSpotName=Stream11&storeId=10151&langId=-1&catalogId=10051), a small, light, [sky-blue thing](http://www.laptopmag.com/reviews/laptops/hp-stream-11)  that is meant to be used as a "cloud laptop." The pitch from HP is that by using Microsoft's Office 365, OneDrive cloud storage, and a lightweight, fan-less laptop, you can work from anywhere. Or, as the marketing went in 2014, you can "#WorkFromHappyPlace."

This is a decent device in theory: Chromebooks for people who want to (have to) work with actual Office apps. In practice, it ran like it was submerged in the kind of tree sap that preserved the mosquitoes in _Jurassic Park_. I wiped the Stream 11 clean and reinstalled Windows 8.1, and it was still not a pleasant computer to use. I upgraded to Windows 10 during the time that it was free to do so, and it ran no better, if not worse. I removed HP's pre-installed  apps, I used only Microsoft's built-in Edge browser, and I kept only one or two apps open at a time. Still, apps loaded slowly, and the system monitor constantly showed an overloaded CPU and full booked-up memory. Windows and this little guy just couldn't work together.

Still, I liked how light and quiet it ran, its battery life was decent. Its [spec sheet is decent for a tiny laptop](http://support.hp.com/rs-en/document/c04490851). It had a USB 3.0 port, an HDMI video-out port, an SD card reader, and a webcam. The HP Stream 11 (technically the HP 11-d001dx) could put in work, if someone would let it. I went to find a new OS for it.

First I tried [CloudReady](https://www.neverware.com/), which purports to "turn any computer into a Chromebook." It got pretty close, but it couldn't load my trackpad or Wi-Fi drivers (or maybe just the trackpad, I can't recall). Searching around more, I found that CloudReady seemed to take some of its cues from [Arnold the Bat's custom ChromiumOS builds](http://arnoldthebat.co.uk/wordpress/), so I tried two or three variants of that: regular, "Vanilla," and "Special Build," the last one with more obscure third-party drivers baked in. I got all the way to a working Chrome system with working (if extremely weak) Wi-Fi, but the trackpad couldn't be modified at all―no tap-to-click, sensitivity, nothing.

### The unlikely solution: GalliumOS

[GalliumOS](http://galliumos.org) is a very, very lightweight version of [Xubuntu](http://xubuntu.org), which is itself a lighter version of [Ubuntu](http://ubuntu.org), meant to turn your Chromebook into a more full desktop kind of computer. So it's scaled down, and it's meant to be used on laptops with small solid-state hard drives and slower, cheaper processors. By some stroke of luck, it works with most of the Stream 11's hardware.

### What you'll get 

GalliumOS is a good-looking Linux OS, and it's pretty snappy on the Stream 11. 

![Screenshot of full GalliumOS desktop](/assets/post_images/2016-09-24/full_desktop_screenshot.png)

I wrote this entire guide on the Stream, while keeping Chrome (technically Chromium) open with 2-5 tabs open at various times. It has some smart, useful built-in apps: Pidgin for instant messaging, VLC for playing every media file on Earth, Simple Scan for scanning, and a few others. I like Mousepad for text editing, because it has color schemes and Markdown support. If you want, you can install nearly any app that works with 64-bit Ubuntu or Xubuntu. I've added clients for [Slack](http://slack.com) and [Zoom](https://support.zoom.us/hc/en-us), just in case I have to do some work on this little Streamy. I've even added [DisplayLink drivers](http://www.displaylink.com/downloads/ubuntu) to hook up to a monitor through a USB 3.0 hub at my office. 

Remarkably, GalliumOS works pretty well on the HP Stream 11, with a few notes and tweaks:

#### Dual-booting Windows is possible, but tricky

I'm writing this guide from the point of having given up on Windows. You could still dual-boot Windows by shrinking its partition, or re-installing it on, say, 20 GB of the Stream's 32 GB drive. I think Windows 8/10 will be squeezed for space, but if you want to keep your access to Office or another Windows app, you can follow this guide up until the GalliumOS installation process, where you'll [opt for dual-booting instead of full-wiping](https://help.ubuntu.com/community/WindowsDualBoot).

#### Wi-Fi adapter

One "tweak" I highly recommend is buying a [$9 USB Wi-Fi adapter](https://www.amazon.com/Edimax-EW-7811Un-150Mbps-Raspberry-Supports/dp/B003MTTJOY). The Broadcom Wi-Fi/Bluetooth chip inside the Stream 11 is not only a rare variant, but made by a company that does not distribute its firmware outside official Windows drivers. I can get the Wi-Fi inside the Stream 11 _working_, but it's very weak in range, and drops out on occasion. Using the internal Wi-Fi more than one room away from the router in my house is very dicey. Getting the Edimax adapter working is not just a double-click procedure, but at least I know it's working, and it works a good deal better than the internal circuitry (which is unusual, but so is installing Linux!).

You might already have a USB Wi-Fi adapter on-hand, and it might work great the first time you plug it into your reborn Stream. Good deal, if so! If you feel like giving up one of your two USB ports is too much, you can always [grab a $10 USB 3.0 4-port hub](https://www.amazon.com/Anker-Ultra-Slim-4-Port-Data/dp/B00XMD7KPU) while you're buying that $9 Wi-Fi adapter.

#### Bluetooth

If you don't need Bluetooth on your laptop, you can definitely skip the quirky process described further on in this guide.

<h3 id="howto">How to install GalliumOS on the HP Stream 11</h3>

**What you'll need**

+ Space on a computer (Stream or other) for a 1.0 GB download
+ A USB thumb drive, 2 GB or larger (1 GB might cut it, but 2 GB is safe)
+ USB Wi-FI adapter (optional, but highly recommended; here's [my choice](https://www.amazon.com/Edimax-EW-7811Un-150Mbps-Raspberry-Supports/dp/B003MTTJOY))
+ Either:
    * A second computer, with a working web connection to download the needed files, or
    * An ethernet-to-USB adapter, or 
    * The patience to read through this guide and download all the files you'll need.

1) First off, **back up anything you need to save** from your Windows installation on the Stream. You can use the built-in OneDrive cloud sync, a USB thumb or hard drive, wherever you keep useful stuff. Even if you want to try and dual-boot Windows, be prepared for things to go terribly wrong (but optimistic they won't).

2) Next, **[download the Bay Trail version of GalliumOS](https://galliumos.org/download)**. Keep this file somewhere other than on the USB drive you will use to install Gallium. Bay Trail is the industry/code/nerd name for the Intel processor inside the Stream 11. If you're comfortable with BitTorrent, you can [download the ISO file with the help of others](https://galliumos.org/releases/2.0/galliumos-baytrail-2.0.iso.torrent). Otherwise, [download the Bay Trail ISO directly](https://galliumos.org/releases/2.0/galliumos-baytrail-2.0.iso.torrent). It's about 1.0 GB as I write this, so give it some time and make sure you have space.

3) **Write the GalliumOS ISO to the USB drive.** If you're using your Stream to do this, follow the Windows instructions below.

**Windows:** The [Ubuntu Wiki has a write-up](https://wiki.ubuntu.com/Win32DiskImager/iso2usb), but the basics are:

+ Download and install [Win32 Disk Imager](http://sourceforge.net/projects/win32diskimager)
+ Open Win32 Disk Imager, and click the select (folder) button for image file. Click in the lower-right corner to change the file filter to "*.*". Choose the GalliumOS file you downloaded.
+ Under "Device," select your USB drive. Make sure it's that little USB drive you plan to use, and not, you know, the drive with all of your family photos. Unplug those other drives if you're not sure.
+ Hit "Write," click "Yes" (you know the risk), and wait for the "Write successful" prompt to come up.

**Mac:** Here's a [Terminal-y guide to writing an ISO to a USB drive](http://superuser.com/a/226148). [UNetbootin](http://unetbootin.github.io/) is the best graphical tool for doing it, and [here's how to use it](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx).

**Linux:** [This works for Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu).

4) Change the boot mode in Stream BIOS

Shut down your Stream 11. Before you start it up again, get your finger ready on the Escape key (upper-left-most key). It's a very small window in which you can press the escape key while booting up to enter the boot options. Once the menu appears, press F10 to enter BIOS Setup.

![Smartphone photo of BIOS menu, exciting](/assets/post_images/2016-09-24/stream_bios.jpg)

Inside the creepy _Tron_-style menu, head over to the System Configuration section by pressing the right arrow twice. Now head down to the "Boot Options" menu by pressing the down arrow twice, then hit Enter to fold down the Boot Options menu. Now head down to "Legacy Support," then press Enter to change Legacy Support to "Enabled." You'll get a little warning that you might not be able to boot your system anymore, but that's okay. 

Now there's a few new options below, in the "Legacy Boot Order" section. Head down to the "USB Diskette on Key/USB Hard Disk" item, then press F5 (at the very top of the keyboard, to the left of the "Mute" button) to move USB Diskette above "Notebook Hard Drive." Now the Stream will look for the USB drive before it automatically boots what's on its own hard drive.

Tap right to head over to "Exit," then choose "Save and Exit." The Stream may try to restart, but just shut it off by holding down the power button.

![Photo of Stream's warning about secure boot mode being off](/assets/post_images/2016-09-24/creepy_warning.jpg)

Now the Stream is going to make one last attempt to hold onto its Windows 8 install (unlike most people who have one). You have to type in a four-digit code and hit Enter to prove you're a real human who wanted to make this system change. Do it, move on.

5) Insert the USB drive with the Gallium image into one of the Stream's USB ports. This part is gonna be easy, compared to what you had to do there. Boot up your Stream, and hit Enter to choose the default GalliumOS live installer.

_Note: If you have your USB Wi-Fi adatper or Ethernet cord and an ethernet-to-USB adapter, now would be a good time to plug it in. Also, if you're going to try to dual-boot Gallium and Windows (eep), you're [on your own with this install](https://help.ubuntu.com/community/WindowsDualBoot)_

![Options to check for downloading and third-party during Gallium installation](/assets/post_images/2016-09-24/check_options.png)

If you're connected to internet through an adapter, click the Wi-Fi icon in the lower-right corner and connect to your router. Click through and fill out the forms of Gallium's installation. When it asks what kind of installation you want, choose "Erase disk and install GalliumOS" for the easiest going. If you're plugged into Wi-Fi, choose to "Download updates while installing GalliumOS," and "Install third-party software." Move through the rest of the setup, and reboot when asked to do so.

You've installed GalliumOS on your Stream 11! If you have a USB Wi-Fi adapter that works right away, and you don't need Bluetooth, you might not need much more than a few <a href="#tweaks">useful tweaks</a>.

Otherwise, we're diving in for some fixes. Now's a good time for a beverage break!

### Getting the Edimax Wi-Fi adapter working

For $9, you're not getting instant gratification with this Wi-Fi adapter. But it's not too hard to get it working.

**If you have an Ethernet-to-USB adaptor or another Wi-Fi dongle to use:**  [This answer on Ask Ubuntu covers it](http://askubuntu.com/a/612662). Open a terminal (it's one of the default buttons on the bottom panel, with the ">_" icon). Copy the lines (Control+c, or Edit->Copy from the menu panel), then paste them into your terminal. It's not just Control+v to paste, however; to paste in the terminal, you use Control+Shift+v, or right-click and choose Paste. Hit Enter if the commands don't immediately start working. I didn't encounter the bug mentioned in the middle of the answer. If you do have to edit the file, enter this command in terminal to bring it up:

`mousepad ~/rt8192cu/os_dep/linux/usb_intf.c`

Reboot the system (click the Start-type button in the lower-left corner, then choose the button in the upper-right corner).

**If you don't have an adaptor:** [This blog post covers the process](https://kisdigital.wordpress.com/2010/12/28/setup-edimax-usb-wireless-adaptor-in-ubuntu/) (thanks, Robert Zehnder!). But a few of the links are out of date: [here's the page with the drivers](http://us.edimax.com/edimax/download/download/data/edimax/us/download/for_home/wireless_adapters/wireless_adapters_n150/ew-7811un)―you're looking for the latest version of "EW-7811Un_Linux_driver" under the "Driver" list. [Here's the direct link to the driver when I wrote this](http://us.edimax.com/edimax/mw/cufiles/files/download/Driver_Utility/transfer/Wireless/NIC/EW-7811Un/EW-7811Un_Linux_driver_v1.0.0.5.zip).

### Getting native Wi-Fi working 

I'm not sure if the Wi-Fi was ever very strong on the HP Stream 11, running Windows; maybe so, with the right magical drivers. On any other OS, it seems to have a range of 30 feet, and regularly drop out for a few seconds at a time. I think a USB adaptor is worth the price, if you're already this far down the Linux path.

Still, you might have better luck than I. And you might want to have a backup Wi-Fi, or save yourself a USB slot. If you need to, [this blog post has the single terminal line that should do the trick](http://kb.openstudioproject.com/content/ubuntu/install-broadcom-bcm43142-driver-ubuntu) (Thanks, Edwin van de ven!). The line is:

<code>sudo apt-get install linux-headers-`uname -r` dkms build-essential bcmwl-kernel-source</code>

If this doesn't work for you, well, believe me, I've been there. One suggestion: you might try getting the Bluetooth working, as described just below, then uninstall and reinstall `bcmwl-kernel-source`. To do that:

`sudo apt-get purge bcmwl-kernel-source && sudo apt-get install bcmwl-kernel-source`

### Getting Bluetooth working

If you need Bluetooth on your newly reborn HP Stream 11, [it's not an easy process](http://askubuntu.com/a/632348). But, since you and I have the same laptop, I can spare you a lot of the trouble. [Here's the hex file](/assets/files/BCM.hcd). Download the file into your home folder (or copy it there using the file manager). Now follow the instructions from near the end:

`sudo cp ~/BCM.hcd /lib/firmware/brcm`
`Turn your computer off and on again. Not just reboot!`

<h3 id="tweaks">Useful tweaks</h3>

#### Keyboard tweaks

GalliumOS assumes you're using a [Chromebook keyboard](http://cdn6.bigcommerce.com/s-blhknq8/product_images/uploaded_images/hp-chromebook-14-keyboard-key-replacement.png?t=1424574830), with its search key instead of Caps Lock, and some specialty top-row key functions. It works pretty well overall with the Stream 11. Volume and brightness keys work, and pressing the Windows key brings up a handy application finder.

If you want to have a more traditional Windows-style keyboard, or make your own shortcuts to functions like screenshots, bring up the application finder (or click the Gallium button in the lower-left-most corner) and search for "keyboard." In the "Layout" tab, you can change to "Generic 101-key PC" to get back to a standard keyboard, or change to a different style of Chromebook keyboard.

#### A few tips on using your crapbook

So, you should now have a Stream 11 running Gallium OS. It's a neat, snappy little system. But it's still a small computer, meant to live mostly on the web and be a handy, portable little Wi-FI machine. It's not for editing video, or continuing your _Civilization V_ game on your Steam account.

With that in mind, some tips on keeping the Stream 11 nimble:

+ Go ahead and use Chromium (the more-open-source version of Chrome, don't ask, long story), but don't use it the way you would on a full desktop or laptop. If you use a lot of extensions on Chrome on another computer, then don't let them sync over eat up your memory. Click the menu button, choose Settings, then at the very top, click the "Advanced sync settings" button. Switch the radio button at top from "Sync everything" to "Choose what to sync," and un-check Extensions (and Apps, while you're at it). Try to run Chromium on this Crapbook with as few extensions as possible. A few won't kill it, but you'll feel a dozen of them.

+ If youre the type to open a lot of tabs, one extension that is worth installing: [The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg). It automatically suspends tabs when you haven't looked at them in a while, so they don't eat as much memory, just sitting there. Head into the extension's settings (right-click on the button in Chrome and choose "Options," or head to Settings->Extensions) and change the default suspend time to something lower than the 60-minute default.

+ Install LibreOffice if you really need to (`sudo apt-get install libreoffice` in a terminal), but I think Mousepad can get a lot more done than you might think. Even Google Drive works better than LibreOffice, really.

+ Thunderbird is a good mail client, but it seems to run heavy as lead on this laptop. Try [Claws Mail](http://www.claws-mail.org/) or, if you're brave, [Mutt](http://www.mutt.org/) on the command line. I used [this tutorial to setup Mutt with Gmail](https://hynek.me/articles/my-mutt-gmail-setup/) (thanks, Hynek Schlawack!).

+ For the most part, you can install anything on GalliumOS that is offered for Ubuntu: Dropbox, Skype, "official" Chrome, even Steam. Just be wary if, while installing, an app needs to install dozens of other libraries and apps. This stuff builds up over time, in terms of hard drive space and memory usage

***

Enjoy! This was my first real "How to do a specific thing for some obscure hardware" guide. I've probably read and used dozens or hundreds of these types of blog posts in my life. Hope this was helpful.

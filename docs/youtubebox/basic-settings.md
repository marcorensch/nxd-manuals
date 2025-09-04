---
sidebar_label: 'Basic Settings'
sidebar_position: 2
toc_max_heading_level: 3
---

# Basic Settings

This section gives you a brief overview of the available Parameters of the NXD YouTubeBox.

## Player Type

If you have purchased NXD YouTubeBox Pro you can here select if you want to embed a Video or Playlist.

## Mode

Select here if the module instance should be in static ( default ) or dynamic mode. In dynamic mode you can define
video-id / playlist-id in relation to a Joomla! Article. When using Dynamic Option you need to define a Custom Field to
store the linked Video / Playlist ID for an Article. In static mode the Module simply shows the Video / Playlist for the
given ID in the module settings below.

## Custom Field

Only available in Dynamic Mode. Select here the Custom Field which stores the Video / Playlist ID for an Article.

## Content ID

In default mode you can here enter the Video / Playlist or User ID of the content you want to show. In Dynamic mode this
value will be used as Fallback.
Allowed formats:

- Video ID
- Playlist ID
- YouTube Video URL ( https://www.youtube.com/watch?v=dQw4w9WgXcQ )
- YouTube Playlist URL ( https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp )
- YouTube Short URL for Videos ( https://youtu.be/dQw4w9WgXcQ )

## Privacy Enhanced Mode

The module supports YouTube's YouTube's "__no-Cookie__" option if needed.

## Initially Muted

Mutes the video at start - highly recommended if autoplay is to be used.

## Initial Volume

Set the Initial Volume - will be overwritten by [Mute Option](#initially-muted).

## Autoplay

This option specifies whether the initial video will automatically start to play when the player loads.
__Please be aware that most Browsers blocks this if Video Audio (Volume) is not set to muted.__

## Start Time

This parameter causes the player to begin playing the video at the given number of seconds from the start of the video.
The parameter value is a positive integer.

## End Time

This parameter causes the player to stop playing the video at the given number of seconds from the start of the video.
The parameter value is a positive integer.

## Loop

In the case of a single video player, Yes causes the player to play the initial video again and again. In the case of a
playlist player, the player plays the entire playlist and then starts again at the first video.

## Allow Fullscreen

Setting this option to No prevents the fullscreen button from displaying in the player. The default value is Yes, which
causes the fullscreen button to display.

## Show Controls

This option indicates whether the video player controls are displayed.

## Disable Keyboard Controls

Setting the option's value to Yes causes the player to not respond to keyboard controls. The default value is No, which
means that keyboard controls are enabled.

## Show Related from other Channels

This parameter indicates whether the player should show related videos when playback of the initial video ends. YouTube
will
show related videos if the initial video is a video from a channel that is different from the channel that owns the
initial video. __There is no option to disable related videos since they are always shown__.

## Modestbranding

This option lets you use a YouTube player that does not show a YouTube logo. Set the parameter value to Yes to prevent
the YouTube logo from displaying in the control bar.
Note a small YouTube text label will still display in the lower-right corner of a paused video or when the user's mouse
pointer hovers over the player.

## Inline Playback

Sets the Inline Playback Value which defines if the video will be played inside the page or in a separate tab /
window on touch.


<img src="/img/nxd_youtubebox/nxd_ytb_main_settings_dynamic.png" alt="NXD YouTubeBox Main Settings" class="bordered" />




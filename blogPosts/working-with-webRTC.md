---
title: "Working with WebRTC"
date: "2024-01-18"
slug: "working-with-webRTC"
image: "webRTC-cover.jpg"
excerpt: "An Introductory blog to Web Sockets - All you need to know to start working with web sockets."
isFeatured: false
isPublished: false
---

## 👋 Welcome to Working with webRTCs 🌐

> _Suppose you are playing a multiplayer online game 🎮 and for some reason, you lose your network, and your game lags and after 10-12s it comes back online. Now during these 10-12s, you would have lost many data but do you want to start the game as if you pressed "𝐏𝐚𝐮𝐬𝐞 and 𝐏𝐥𝐚𝐲" or do you want it to be "𝐋𝐢𝐯𝐞" to get back to the fight._
>
> Which among the two would you prefer ? And I am pretty damn sure we all will be choosing "𝐋𝐢𝐯𝐞" one. Such is the use case of webRTC which stands for Real time communication for the web.
>
> This is the use case of UDP protocols and we want the same "𝐋𝐢𝐯𝐞" feature say in Video calling, gaming, or online video chat platforms like Omegle.
> In these kinds of services, we don't bother to worry about the data lost during poor network connection or other issues, we just want to be up-to-date with the action.

If you are unfamiliar with the concept of protocol and its use case, you can refer this [blog post](introduction-to-websockets).

## 📖 What You will be learning ?

1. What are webRTC features?
2. What protocols it uses and why can't we use web sockets?
3. Working of WebRTC.
4. Real-time Examples where web sockets are used.

## 🤏 Prerequisites

- If you have worked with javascript and React, then you will be good to go.
- Basic knowledge of Nodejs, Express and web sockets. ( If you don't have prior knowledge of web sockets you can refer to this **[LINK](introduction-to-websockets)** ).
- You need to have [Node](https://nodejs.org/en) installed.
- Interest to learn something new 💡.
- And a cup of coffee. ☕

## 🤔 Questions to answer

There are things we need to know or rather questions we need to ask before establishing a webRTC connection. What are those 🤔❓Let's discuss them over here.

- 𝐐𝐮𝐞𝐬𝐭 1: 𝐖𝐡𝐞𝐫𝐞 𝐚𝐫𝐞 𝐲𝐨𝐮? ( 𝘊𝘭𝘪𝘦𝘯𝘵𝘴 𝘯𝘦𝘦𝘥 𝘵𝘰 𝘬𝘯𝘰𝘸 w𝘩𝘦𝘳𝘦 𝘦𝘹𝘢𝘤𝘵𝘭𝘺 𝘥𝘰𝘦𝘴 𝘩𝘦 𝘴𝘪𝘵 𝘢𝘯𝘥 𝘸𝘩𝘦𝘳𝘦 𝘥𝘰𝘦𝘴 𝘪𝘵'𝘴 𝘱𝘦𝘦𝘳 𝘤𝘭𝘪𝘦𝘯𝘵 𝘴𝘪𝘵𝘴 𝘪𝘯 𝘰𝘳𝘥𝘦𝘳 𝘵𝘰 𝘦𝘴𝘵𝘢𝘣𝘭𝘪𝘴𝘩 𝘵𝘩𝘦 𝘤𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘰𝘯. )

- 𝐐𝐮𝐞𝐬𝐭 2: 𝐖𝐡𝐚𝐭 𝐚𝐫𝐞 𝐲𝐨𝐮 𝐬𝐞𝐧𝐝𝐢𝐧𝐠? ( 𝘕𝘦𝘦𝘥 𝘤𝘰𝘮𝘮𝘶𝘯𝘪𝘤𝘢𝘵𝘪𝘰𝘯 𝘣𝘦𝘵𝘸𝘦𝘦𝘯 𝘊𝘭𝘪𝘦𝘯𝘵𝘴 𝘴𝘰 𝘵𝘩𝘢𝘵 𝘵𝘩𝘦𝘺 𝘢𝘳𝘦 𝘢𝘸𝘢𝘳𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘸𝘢𝘺 𝘵𝘩𝘦𝘺 𝘯𝘦𝘦𝘥 𝘵𝘰 𝘤𝘰𝘯𝘯𝘦𝘤𝘵 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘥𝘢𝘵𝘢 𝘰𝘯𝘦 𝘪𝘴 𝘴𝘦𝘯𝘥𝘪𝘯𝘨. )

![Questions to answer](/blogs/working-with-webRTC/questions-why-webrtc.png)

In order to establish a connection _( we will term this as "**Peer Connection**" )_, Clients should be aware of their public IP address which they are actually aware of. Now can we get the IP address ? Answer is "**NO**". Why you ask ? Because of something known as **NAT** ( Network Address Translation ).

By sharing a single IP address among multiple computers on a local network, NAT conserves the limited number of publicly routable IPv4 addresses. NAT also provides a layer of security for private networks because it hides devices' actual IP addresses behind a single public IP address. So , it is being basically masked behind NAT.

![Nat-masking-IP](/blogs/working-with-webRTC/client-pc.png)

For better explanation, let's say that you have got three devices, a mac machine, an android mobile and a iPad connected to a router which is connected to the internet.

Now your router is aware of the public IP address. When multiple devices are connected to a router, they often share a single public IP address. This process is called Network Address Translation (NAT). The router assigns each connected device a private IP address within the local network, and it keeps track of these addresses.

When a device from the local network wants to communicate with the internet, the router replaces the private IP address of the device with its own public IP address before sending the request to the internet. The router then maintains a table to keep track of the translations, ensuring that responses from the internet are correctly directed back to the originating device within the local network.

![Getting-public-IP](/blogs/working-with-webRTC/getting-public-ip.png)

Can we construct a way such that devices can establish peer connection with other devices ? The Answer is "**YES**". How you ask ? Let's take it up from here on...

## 🌐 Getting Public IP.

There can a discussion on why do we need public IP addresses right ? Well, lets take an analogy for this.

> Suppose I have recently moved out to New Jersey and my parents are visiting my home for the first time. They called me and asked me where exactly do I live. Usually I call it "𝐇𝐨𝐦𝐞". I told similarly to my father also and got a scolding from him. Idiot! I also call my home as "𝐇𝐨𝐦𝐞". Don't tell me your private IP address but your Public IP address. Then I called up directory guy and asked him what is my public IP address. He then answered with _"1313 Manchester St Toms River, New Jersey"_.
>
> You see, private IP address are provided to you by router and can be same for any other devices connected with some other router sitting in Japan.This is not reliable and may create issues while connecting. So we require public IP address.
>
> ![Private-vs-Public](/blogs/working-with-webRTC/private-vs-public.png)

**STUN Servers** - Session Traversal Utilities for NAT. They are servers that help devices discover their public IP addresses and navigate the complexities introduced by NAT, enabling efficient communication over the internet, especially in real-time communication applications. There are a bunch of STUN servers and almost all are free or very negligible cost. Ex:- Google Stun Server, twilio Stun server etc.

Here's a list of [STUN servers](https://gist.github.com/zziuni/3741933) you could refer to.

How do they work ?

Well, the device ( Peer Connection ) sends a Request to the STUN server. It will be like _"Hey Stun!, Sup ? Well you know my parents are coming home and they need my address to get to me. But I don't know my public address. Can you figure out a way to do so ?"_

**ICE Candidates** : Stands for Interactive Connectivity Establishment. Stun server will then respond with an ICE candidate. ICE is commonly used in real-time communication applications, such as WebRTC, to establish direct peer-to-peer connections between devices, even when they are behind Network Address Translation (NAT) routers.

It is just a fancy way of telling : _"Hey Dad! here's how you can get to me. I am sending a person (ICE candidate), just follow him and he will help you get to me."_

Any request with that ICE candidate will redirect the network back to the client. Hence estavlishing a way to get to the client.

![Stun_ICE_Candidate](/blogs/working-with-webRTC/stun-ice-candidate.png)

Similarly, the other client will also send a request to STUN server and get it's ICE candidate so that it is also aware of it's own public IP address.

![Stun_ICE](/blogs/working-with-webRTC/stun-ice.png)

## 🛤️ Adding Tracks

Now, we have the route by which they can establish the peer connection. This answers the **Question 1** of _"Where you are?"_
let's now take a step forward and look at the **Question 2**: _"What are you sending?"_

WebRTC stands for Real Time Communication for the Web and what real-time communication is there if there is no data ( Tracks ) to send through.

`getUserMedia` is a JavaScript function. It is part of the WebRTC API, which allows web applications to access audio and video input devices. When we are ready to send data over to the other side via UDP, this is what we will be transmitting for the real time communication.

## 🫴 Creating Offer

Probably the most important part of webRTC feature. This is where we define all our data and send the whole thing through.
WebRTC has an object called `RTCSessionDescription`. The `RTCSessionDescription` consists of two fields:

1. **type** ( offer/answer )
2. **SDP** ( Session Description Protocol )

- Type : It is of type string which can be either or two "offer" or "answer". In Layman language, it basically filters who is who. So, whoever is the one sending the feed will be creating a new offer and the one responding to the offer will generate its corresponding answer.

- SDP : It has the codex of the timing feed and all the other important things you don't need to wonder and take care of the video/audio stream.

![RTCSessionDesc](/blogs/working-with-webRTC/rtc-session-desc.png)

Now the flow looks something like this :

1. Client 1 sends a request to the STUN Server and get backs a response as an ICE Candidate.
2. Client 1 then creates a new offer as type "**offer**" and its associated SDP.
3. We will send the entire envelope of the data over to client 2 via **SOME_RELIABLE_PROTOCOL**.
4. Client 2 sends a request to the STUN Server and and gets back its response as an ICE Candidate too.
5. Client 2 similarly creates a new offer as type "**answer**" and its associated SDP.
6. Then sends back the entire envelope of the data over to Client 1.
7. Once all this is done, client 1 is aware of the route to reach to client 2 and vice versa and we are then ready to establish an **UDP** connection.

But where does all this info is stored (RTCSessionDescription, Tracks and ICE candidate) ?

Let's introduce 2 new terms "`setLocalDescription`" and "`setRemoteDescription`".

## ♾️ Signalling Server

Once all the data has been received from the server and RTCSessionDescription, we will then store all the information inside localDescription using `setLocalDescription` and whatever we receive from the client 2 will be stored in remoteDescription using `setRemoteDescription`.

Now that localDescription has been set, We can't just send it across the wire. We need a secure and reliable way of sending the data over to the other side and what is more secure and reliable than using websockets ( TCP Protocol ).

> Note: WebSocket connection is not a part of WebRTC Connection, we could have used any other insecure connection as well to pass-on the data but the only use case of websockets here is to communicate the data back and forth between peers and once that is done, we can remove the websocket connection.

Here websocket connection works as a **Signalling Server**.

![Signalling-Server](/blogs/working-with-webRTC/signalling-server.png)

![Local-Remote-Desc](/blogs/working-with-webRTC/local-remote-desc.png)

## 🤩 Congratulations! You did it 🔥🔥

Great! You have successfully completed this comprehensive blog on webRTC.
You deserve a toast 🥂. Now you can proceed with some new ideas to create a video calling app using webRTC. If you have been following up and have created something, make sure to showcase your project connect with me on [LinkedIn](https://www.linkedin.com/in/abhayashankar/).

---
title: "Creating Cluster Profiles"
metaTitle: "Creating Cluster Profiles"
metaDescription: "The method for creating a Cluster Profile on Spectro Cloud"
icon: ""
hideToC: true
fullWidth: false
---

## Creating Cluster Profiles

Cluster profiles are created by configuring various layers of the Kubernetes infrastructure stack. The following steps need to be performed to create a new cluster profile:

* Provide basic profile information such as Name, Description, Profile Type and Tags. Profile Type (Full, Infra, Add-on) will dictate the layers that can be configured in the cluster profile. Tags on a cluster profile are propagated to the VMs deployed on the cloud/data center environments when clusters are created from the cluster profile.
* Select a cloud/data center environment. Cluster profiles are environment-specific.
* Configure the layers of the infrastructure stack. The following layers are considered “core infrastructure” layers. Configuring these layers is mandatory for every cluster profile of the type Infra or Full. These layers are not configurable for "Add-On" cluster profiles:
  * OS.
  * Kubernetes.
  * Network.
  * Storage.
* Additional layers such as Monitoring, Security, Load Balancers, etc. may be added and configured as desired. These layers may be configured for the profiles of the type "Full" or "Add-On".
* Configure additional add-on layers as follows:
  * Select the pack type, repository, packname and version for each layer. Spectro Cloud provides several packs out of the box. These are synchronized from Spectro Cloud's **Public Repo**. Spectro Cloud also allows charts from a helm chart repository to be used as a pack. Some of the publically available repositories are provided out of the box. The platform allows extending or customizing the choice of packs. Users may *define their own Pack Repository and link it to Spectro Cloud*. Similarly, additional public or private helm repositories can also be added to the system as a source for helm charts. When configuring layers in the cluster profile, users can select packs from Spectro Cloud's Public Repo, their own private pack repository or any helm chart repository registered.
  * Choose the desired version for the selected pack. Choices include pinning to a specific version of the pack (e.g. 1.1.1) or picking a major or minor train such as 1.x or 1.1.x. Picking a major/minor train results in a dynamic version association. The latest release from that train is linked to the pack at any given point. Future release updates on the train will result in the pack being relinked to the newest version. This allows clusters to always be at the latest released version, without having to make subsequent updates to the profile.
  * The configuration option and version selected might provide configuration parameters to provide granular control or fine-tune certain aspects of the functionality. For the packs provided out of the box, the configuration parameters are set to values based on common best practices. Users may override these pack values as desired.
  * Certain integrations, may require additional supporting manifests to be created besides the inbuit pack or chart manifests. As an example, you might want to create a secret that an integration relies on. This can be achielved by adding one or more additional manifests (Attached Manifests). 

* Review your changes and save the cluster profile.

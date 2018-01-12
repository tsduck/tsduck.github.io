/*
@ @licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2017 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "TSDuck", "index.html", [
    [ "TSDuck MPEG Transport Stream Library for C++", "index.html", null ],
    [ "Building TSDuck", "building.html", [
      [ "Pre-requisites: build tools", "building.html#buildreq", [
        [ "Windows", "building.html#reqwindows", null ],
        [ "Fedora", "building.html#reqfedora", null ],
        [ "Red Hat Entreprise Linux, CentOS", "building.html#reqrhel", null ],
        [ "Ubuntu", "building.html#requbuntu", null ],
        [ "All Linux distros", "building.html#reqlinux", null ],
        [ "MacOS", "building.html#reqmac", null ]
      ] ],
      [ "Building the TSDuck binaries", "building.html#buildbin", [
        [ "Windows", "building.html#buildwindows", null ],
        [ "Linux and MacOS", "building.html#buildlinux", null ]
      ] ],
      [ "Building the TSDuck installers", "building.html#buildinst", [
        [ "Windows", "building.html#instwindows", null ],
        [ "Fedora, CentOS, Red Hat Entreprise Linux", "building.html#instrhel", null ],
        [ "Ubuntu", "building.html#instubuntu", null ],
        [ "Installer files", "building.html#instfiles", null ]
      ] ]
    ] ],
    [ "Developing TSP Plugins", "devplugin.html", [
      [ "Plugin development workflow", "devplugin.html#pdevworkflow", null ],
      [ "Development guidelines", "devplugin.html#pdevguidelines", [
        [ "Invoking tsp from a plugin, the ts::TSP callbacks", "devplugin.html#pdevtsp", null ],
        [ "Joint termination support", "devplugin.html#pdevjtem", null ]
      ] ],
      [ "TSP design", "devplugin.html#pdevdesign", [
        [ "Plugin Executors", "devplugin.html#pdevexec", null ],
        [ "Transport packets buffer", "devplugin.html#pdevbuffer", null ]
      ] ]
    ] ],
    [ "Testing TSDuck", "testing.html", [
      [ "Testing overview", "testing.html#testoverview", null ],
      [ "Organization of the tests", "testing.html#testorg", null ],
      [ "The TSDuck library test suite", "testing.html#testlib", null ],
      [ "The TSDuck tools and plugins test suite", "testing.html#testtools", [
        [ "Structure of the test suite", "testing.html#teststruct", null ],
        [ "Adding new tests", "testing.html#testadd", null ],
        [ "Testing a development version", "testing.html#testdev", null ],
        [ "Large files", "testing.html#testlargefiles", null ]
      ] ]
    ] ],
    [ "TSDuck Library Tutorial", "libtutorial.html", [
      [ "C++ features", "libtutorial.html#cppfeatures", [
        [ "Portability issues", "libtutorial.html#portability", null ],
        [ "C++ strings", "libtutorial.html#cppstrings", null ],
        [ "Unicode strings", "libtutorial.html#unicodestring", null ],
        [ "Binary data", "libtutorial.html#bindata", null ],
        [ "Memory management", "libtutorial.html#memmgmt", null ],
        [ "Variables, singletons and static data", "libtutorial.html#singletons", null ],
        [ "Error reporting", "libtutorial.html#errreport", null ],
        [ "Exceptions", "libtutorial.html#except", null ],
        [ "Pseudo-enumeration data", "libtutorial.html#enums", null ],
        [ "Command-line arguments", "libtutorial.html#cmdargs", null ],
        [ "XML data", "libtutorial.html#xml", null ]
      ] ],
      [ "Cryptography", "libtutorial.html#crypto", null ],
      [ "Operating system features", "libtutorial.html#osfeatures", [
        [ "Miscelleaneous system utilities", "libtutorial.html#sysutils", null ],
        [ "Time", "libtutorial.html#time", null ],
        [ "Multithreading", "libtutorial.html#multithread", null ],
        [ "Virtual memory", "libtutorial.html#virtmem", null ],
        [ "Processes", "libtutorial.html#processes", null ],
        [ "Networking", "libtutorial.html#networking", null ],
        [ "Shared libraries", "libtutorial.html#sharelibs", null ],
        [ "Smart-card interface", "libtutorial.html#pcscinterface", null ],
        [ "Windows specificities", "libtutorial.html#wincom", null ]
      ] ],
      [ "MPEG/DVB features", "libtutorial.html#mpegfeatures", [
        [ "Transport streams", "libtutorial.html#tsclasses", null ],
        [ "Audio, video and PES packets", "libtutorial.html#audiovideopes", null ],
        [ "Signalization", "libtutorial.html#siclasses", [
          [ "Binary, specialized and XML formats", "libtutorial.html#sigformats", null ],
          [ "Demux and packetization", "libtutorial.html#demux", null ]
        ] ],
        [ "DVB SimulCrypt protocols", "libtutorial.html#dvbprotocols", null ],
        [ "Conditional access systems", "libtutorial.html#cassupport", null ],
        [ "Other forms of demux", "libtutorial.html#otherdemux", null ],
        [ "DVB tuners", "libtutorial.html#dvbtuners", null ],
        [ "Interface to Dektec devices", "libtutorial.html#dektecops", null ]
      ] ]
    ] ],
    [ "Using the TSDuck library", "usinglibrary.html", [
      [ "Pre-requisites", "usinglibrary.html#libreq", null ],
      [ "Building applications on Linux", "usinglibrary.html#liblinux", null ],
      [ "Building applications on Windows", "usinglibrary.html#libwindows", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", "namespacemembers_vars" ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"classts_1_1_abstract_audio_video_attributes.html#aaa27bab70b76ae2085ff66442c340cbf",
"classts_1_1_audio_attributes.html#a891d5337f32da2ae8dcf4c89f8071a5f",
"classts_1_1_c_t_s4.html",
"classts_1_1_descriptor.html#a2a477f047c0bebf31ea0f54c09bdff89",
"classts_1_1_extended_event_descriptor.html#aaf130fb234af71f43df93e8b2019a5df",
"classts_1_1_linkage_descriptor_1_1_extended_event_linkage_info.html#aa9d2b151ded5388c18b6a815805b8896",
"classts_1_1_p_e_s_packet.html#af8e8c9c9de4137364fe990843a54e4e0",
"classts_1_1_s_d_t_1_1_service.html#a2e4e197d2ddf064aff87837de28c37ea",
"classts_1_1_service.html#a2032e706d40c6030d76a5ae8a84130b1",
"classts_1_1_sys_info.html#aac6a402750a9765d51175b92813d803b",
"classts_1_1_t_s_analyzer_1_1_p_i_d_context.html#a45117b4f3509b8657a07665635b44618",
"classts_1_1_tables_logger_args.html#a532205025a25b216059eb51c43e6b7e1",
"classts_1_1_tuner_args.html#a183fce699e6d477d3ae6e3eafebbf711",
"classts_1_1_u_string.html#a8b98d881599eb358f9ced9bd0055e0ca",
"classts_1_1ecmgscs_1_1_stream_error.html",
"classts_1_1tlv_1_1_message.html#a512e1c480177f5e5c4e4ea940c6bf402",
"classts_1_1xml_1_1_node.html#a063791597919c4f3bf64ae1c6a1204a9",
"namespacemembers_s.html",
"structts_1_1_teletext_descriptor_1_1_entry.html#a677bcdbf71b7f706efc132c95e4ec07a",
"ts_algorithm_8h.html#acddffca0f4b799c16fb4a62a3b67d026",
"ts_m_p_e_g_8h.html#a18271d4e19de24208acba23b31b58ee3a19dd228424fd6c05dde1b182cf6f9df1",
"ts_m_p_e_g_8h.html#ab1aefabe254cc8af1e1f4bc73e8e1047a7e763ff014e1ba6e638c423002a71a56",
"ts_m_p_e_g_8h.html#af65eca52660a5db7689e344a97f11ff9ad09aa07136333b7ca19e0c62dabb417c",
"ts_null_report_8h.html",
"ts_s2_satellite_delivery_system_descriptor_8h.html",
"ts_u_char_8h.html#a0c81d66f43848bffab074cf649a547ec",
"ts_u_char_8h.html#a46ed4521837c0f70c682e26a8a3faafa",
"ts_u_char_8h.html#a96358d9dd0e9f3a8f193738793f019b5",
"ts_u_char_8h.html#adb485e5fad77d466a80b22a2fc6572ff",
"tsxml_attribute_8h.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
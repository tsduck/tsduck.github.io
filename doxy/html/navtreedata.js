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
"classts_1_1_audio_attributes.html#a7611ab4c71bc14e641d42d08752b37dc",
"classts_1_1_c_t_s3.html#a93f8813833af61da2d1aeaa3fc6b681d",
"classts_1_1_dektec_input_plugin.html#a8eb6f07ffd6fb81dd4786aafce26f75a",
"classts_1_1_extended_event_descriptor.html",
"classts_1_1_linkage_descriptor_1_1_event_linkage_info.html",
"classts_1_1_p_e_s_packet.html#a9707b841afbff5bbfd1d6af4e45e3505",
"classts_1_1_resident_buffer.html#aac59d54ade037f0c6c6b4b030cfed898",
"classts_1_1_section_file.html#a08c507a46ca05fa35178a946c2f737bd",
"classts_1_1_socket_address.html#a301d7329740abcc4cabdb91e341ca231",
"classts_1_1_t_o_t.html#a10b1ea761029385200119e4f1e3699b3",
"classts_1_1_t_s_p.html#a8350f734155b137af1380283fae99a12",
"classts_1_1_thread.html#a176d1f2f087d184a4a241a053593d1e8",
"classts_1_1_tuner_parameters_d_v_b_s.html#a466ebb7d25d1a626045c4d3e8f2754e5",
"classts_1_1_variable.html#a4f7cf1986324a981ffe5ed181ffbc3b7",
"classts_1_1emmgmux_1_1_stream_setup.html#a56a5041757f798aea0dd37c027f8e8ab",
"classts_1_1tsp_1_1_options.html#a170401c5093b2f3dd59e577c992ba1e2",
"functions_t.html",
"structts_1_1_p_c_r_analyzer_1_1_status.html#a17be0044bdd16a1838bb588acfd8b435",
"structts_1_1ecmgscs_1_1_traits.html#adcc0fdae5124eae33e1729d3e5350aa7",
"ts_e_m_m_g_m_u_x_8h.html",
"ts_m_p_e_g_8h.html#a59d7516851ab27af6608e38f361df1daacbd1a1496c3cced500dceea62015791e",
"ts_m_p_e_g_8h.html#af65eca52660a5db7689e344a97f11ff9a09178207ef07a2a31b749b0e89e025fe",
"ts_modulation_8h.html#a16201fa1e145bf51da46e41e646a97ab",
"ts_platform_8h.html#a2d3fc0fa119551548f2550c83ca68e47a5083b3f9b5f22506be23ec56cc217b7a",
"ts_sys_utils_8h.html#a3e3525effc73cafe1091169f70166985",
"ts_u_char_8h.html#a1bf0d316963bcb49e29f8a9a2905e5d2",
"ts_u_char_8h.html#a56ee884008a88a425fa5e78274c81422",
"ts_u_char_8h.html#aaa0a328cafe61ea0deeda38ac6ac0d70",
"ts_u_char_8h.html#aea7b8f2165631c98f2049b76edeacd57"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
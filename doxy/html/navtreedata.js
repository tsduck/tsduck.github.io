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
        [ "macOS", "building.html#reqmac", null ]
      ] ],
      [ "Building the TSDuck binaries", "building.html#buildbin", [
        [ "Windows", "building.html#buildwindows", null ],
        [ "Linux and macOS", "building.html#buildlinux", null ]
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
        [ "XML data", "libtutorial.html#xml", null ],
        [ "JSON data", "libtutorial.html#json", null ]
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
        [ "Enumerator", "functions_eval.html", "functions_eval" ]
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
"classts_1_1_abstract_a_v_c_access_unit.html#a27da29fa32a68a2863dd48da4da8d596",
"classts_1_1_args.html#a2d8ccd8ebc2d6e110922bf4b88e2cd8d",
"classts_1_1_c_a_s_mapper.html#a5ff5f27a01a771a29f4f6288d0f88cec",
"classts_1_1_d_t_v_properties.html",
"classts_1_1_e_d_i_d.html#a2c13d59e87315ef0862efc462ee916e9",
"classts_1_1_h_d_simulcast_logical_channel_descriptor.html",
"classts_1_1_m_a_c_address.html#ac2d0a10419ae3f957444f341aeedaf5e",
"classts_1_1_p_i_d_operator_set.html#a3d2b40407dd76b71836a5c62da7b52f2",
"classts_1_1_ring_node.html#a8bfd94cfff3cff0361b4207dbe2e94f7",
"classts_1_1_section_file.html#a58fbbbd1fce37e987b10b81f747796bd",
"classts_1_1_socket_address.html#a73d99466ceb0e7aca7dbd6bd3a8bf81b",
"classts_1_1_t_o_t.html#a86e912063f238b586401a908496fc2ba",
"classts_1_1_t_s_p.html#a8b0a64bf468a510150b8e37804b98d74",
"classts_1_1_terrestrial_delivery_system_descriptor.html#a2abcdc33244cf245d7d492f571b93a73",
"classts_1_1_tuner_args.html#ab3d0cd21c944aa6a0f2c56391b5bafa7",
"classts_1_1_u_string.html#aa2f30b9620c73d5d9651c1944a8c0632",
"classts_1_1ecmgscs_1_1_stream_status.html#a109fd0ab69f8e8a43d679ff9c010bc29",
"classts_1_1tlv_1_1_message_factory.html#a0fd56ca894d62f8d8efc018b650c6a89",
"classts_1_1xml_1_1_node.html#a5320689edfa66e9d2e4ae3e97d189768",
"namespacemembers_func_v.html",
"structts_1_1_t_s_packet.html#a5ca81e7620d3fbab25717907ae7e9b04",
"structts_1_1tsp_1_1_options_1_1_plugin_options.html#a79428aa164a7f15f120b95334d0deb1e",
"ts_m_p_e_g_8h.html#a0bd71b00ba0c783d58fe9da465e02bd1a5919a56e77b3c760c45d62e3a7863a54",
"ts_m_p_e_g_8h.html#a59d7516851ab27af6608e38f361df1daa112558a31f852226b041e949c280309a",
"ts_m_p_e_g_8h.html#a59d7516851ab27af6608e38f361df1daafd2a8afb3099a6153ec474597a4d2077",
"ts_modulation_8h.html#a0bfe51c83f30216c9beaac7fc31f96d2af41860dee15210708765831cace36ed5",
"ts_platform_8h.html#a1fdd45571c5acc122d3ef73f24034f41",
"ts_static_instance_8h.html#ac807bb137d13176b0e8a9416794d6851",
"ts_u_char_8h.html#a1540c3be9759999824f3776032e5a4c4",
"ts_u_char_8h.html#a4b1a48a946c6d35ba0f37e44b3aa276e",
"ts_u_char_8h.html#a9b4eccd27c614d78bc30d80a5fefb760",
"ts_u_char_8h.html#ae1c89f42a2f7ea4a7a59c27e40517444"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
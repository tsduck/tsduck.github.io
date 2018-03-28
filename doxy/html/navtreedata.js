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
        [ "Ubuntu, Debian, Raspbian", "building.html#requbuntu", null ],
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
        [ "Ubuntu, Debian, Raspbian", "building.html#instubuntu", null ],
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
"classts_1_1_arg_mix_in.html#add731dc9c46b1669d290d5d3918b3d33",
"classts_1_1_c_a_descriptor.html#a4d3e989bcafb23e1ae887fb671efedad",
"classts_1_1_d_e_s.html#a9ffed55b4ee70917b0134344c0bb4e38",
"classts_1_1_e_c_b.html",
"classts_1_1_grid_1_1_column_layout.html#a0372b29241b7f4199e17a700c0b4ae32",
"classts_1_1_linkage_descriptor.html#a247806795668597df456f9f18b6bd680",
"classts_1_1_network_name_descriptor.html",
"classts_1_1_private_data_indicator_descriptor.html#adbacc8647c1344a4f0258c172b5b7774",
"classts_1_1_safe_access_date.html#ac57966a7cb51407c1c36a220d8fa8507",
"classts_1_1_service_descriptor.html#ad01e1332c4936f9bb37237511b68ea54",
"classts_1_1_t2_m_i_demux.html#ad56eb9e9ecbc77d82f2de478678c24f9",
"classts_1_1_t_s_analyzer_1_1_p_i_d_context.html#ab1c4c2d6a0cd81206de0ce97ac56cd8b",
"classts_1_1_tables_logger_args.html#aabf285f5b53558bdd071f6f4ca55b62f",
"classts_1_1_text_parser.html#aa8a58fd228873e0a93667d4684cd04a5",
"classts_1_1_tuner_parameters_bitrate_diff_d_v_b_t.html#ab6217c7a6cea5846fef3728e366bf894",
"classts_1_1_u_string.html#aee7ce465657a81ff26b97df471188cb0",
"classts_1_1emmgmux_1_1_data_provision.html#a12ca30b0e618757b4d67bd457ddcc710",
"classts_1_1tlv_1_1_serializer.html#a47e8ecefa64a6a7ee8b9c86d71071ca7",
"devplugin.html#pdevdesign",
"namespacemembers_y.html",
"structts_1_1_teletext_descriptor_1_1_entry.html#abbbbce1483db05bdaf7773e37a2573f0",
"ts_abstract_signalization_8h.html#af69863592ef51a674bdf93ecf9bbc1a5",
"ts_m_p_e_g_8h.html#a18271d4e19de24208acba23b31b58ee3a5f96a0ced61943cdc0cc820b51d0c112",
"ts_m_p_e_g_8h.html#a320c39cb24c168ea784ed6cbf30c3d56ad64084e01b1c4cab2e43dab75ae3f76b",
"ts_m_p_e_g_8h.html#ab31686751ccd10915faf031d19fb2ee5",
"ts_modulation_8h.html#a244247a91af4595a95740ef778f85184a2fb0b47db806537c58dab7cedff71112",
"ts_platform_8h.html#a2d3fc0fa119551548f2550c83ca68e47a278c7050331579ffce6ee95b6157f5f9",
"ts_sys_utils_8h.html#a1539b37d4395ded376d4d011961f6c7c",
"ts_u_char_8h.html#a1757bc9a53c18f5025d6c88d332f2fa6",
"ts_u_char_8h.html#a526d738490593657483b457747885a70",
"ts_u_char_8h.html#a9e3495fef2d3622d6ff43d653fdb4c2f",
"ts_u_char_8h.html#ae2d1ad03f82cc46bcec46224002ddec7"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
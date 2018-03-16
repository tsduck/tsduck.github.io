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
"classts_1_1_args.html#a2d8ccd8ebc2d6e110922bf4b88e2cd8d",
"classts_1_1_c_a_s_mapper.html#a3ec60ff3eb64523fa142cc4e8f68119d",
"classts_1_1_d_t_s_descriptor.html#af91cde6ab1e48c41ec9ba02c65ae96c6",
"classts_1_1_e_d_i_d.html#a22f17b84fde135370a5013880891355a",
"classts_1_1_guard_condition_1_1_guard_condition_error.html#aaf2373b09ea6528eb33da425385725b3",
"classts_1_1_m_a_c_address.html#ab17928be6bea8e04cf6b456a0f83584f",
"classts_1_1_p_e_s_demux.html#aa5c5cf4b7deed3c1c266651b95dcb6d7",
"classts_1_1_report.html#a596ac982beb3459f02a57dc802141297",
"classts_1_1_section.html#a7a0a7e7aad6fc6fc6ff3fd2a711ddeaa",
"classts_1_1_simul_crypt_date.html#ad1154ac308d81cde6b222b893a0f147b",
"classts_1_1_t_c_p_socket.html#a081fdffd4879395f7b5b360a481aa3c7",
"classts_1_1_t_s_file_input.html#a3a4912c92b64440b465811f86297d629",
"classts_1_1_target_m_a_c_address_range_descriptor_1_1_range.html#af41b1ab98531ed28f710a49829705911",
"classts_1_1_time_tracker_demux.html#afbb5f7a57e0d78c92290da00f8a3b229",
"classts_1_1_u_string.html#a2bc537ce77d01338e58ca62e4a13333e",
"classts_1_1ecmgscs_1_1_channel_setup.html#a60798385a5ea274cfb79b818d9dc6a2b",
"classts_1_1json_1_1_value.html#a3f1a93db2a39f022bb03879a4d82cea0",
"classts_1_1xml_1_1_document.html#a747bb387503858c02957eaa39d4afd36",
"libtutorial.html#json",
"structts_1_1_process_metrics.html#aeffac47c30cc94c29970c4c9a2c6aa8e",
"structts_1_1emmgmux_1_1_errors.html#a1e77320d82540c48f9616be50ba638f7a649d77f172e3bb3de9ac4143865f999e",
"ts_file_name_rate_8h.html",
"ts_m_p_e_g_8h.html#a320c39cb24c168ea784ed6cbf30c3d56a7bb89e2ec8e56da6bf019dcd7feaaa37",
"ts_m_p_e_g_8h.html#a7b316b20632839212a0558db1b45c93f",
"ts_m_p_e_g_8h.html#af527bab7b821ddcd06cec9ee953c67f3adc718b6cede400f3a05f0c254ff5fca7",
"ts_names_8h.html#a932d5d10adb35058597ea29e32e20967",
"ts_platform_8h.html#ae996c4337196115e063c7b91bf79510e",
"ts_tuner_parameters_d_v_b_c_8h.html",
"ts_u_char_8h.html#a3ab3946cba50b4ed02cc21f32868a79a",
"ts_u_char_8h.html#a81e5b81f0f8eaf1ad35ebdaff783f4f9",
"ts_u_char_8h.html#acabdd963f028076d6599f6712b236b47",
"ts_win_utils_8h.html#ab67b70121953130d98577d780436bf5b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
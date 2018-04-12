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
"classts_1_1_a_v_c_sequence_parameter_set.html#aee982de97dc008cb814113ecaa4398a9",
"classts_1_1_abstract_descrambler.html#abe59313ed20c5d691cb198f870df8992",
"classts_1_1_application_shared_library.html#a1ace0afc577b876d9457cd330441b105",
"classts_1_1_args.html#ada57b307e21cd62d9eb7439dd2dcbfd1a8ee24add02293ee80255be28228dbeb0",
"classts_1_1_byte_block.html#a99c213014fb618fe3867e7e17bc2f6c9",
"classts_1_1_c_t_s1.html#ad2d8774b302e9915f99e53dbe2b9cd2f",
"classts_1_1_component_descriptor.html#af7aa8ceb8b698ab219c05a36b0e97291",
"classts_1_1_d_v_b_charset_1_1_invalid_d_v_b_charset.html#a49c9a4e6f26d0a12e394ea3bc6a36eb3",
"classts_1_1_dektec_input_plugin.html#a05a2064f22139a2cd1f2c19b8314b74b",
"classts_1_1_descriptor_list.html#ae7f86ce01683b1fe510da243851375c0",
"classts_1_1_enhanced_a_c3_descriptor.html#a682b71fe10051927d6ecc1eeb7135815",
"classts_1_1_h_e_v_c_video_descriptor.html#a4411e31dce0f28420da4a29e23ce27e5",
"classts_1_1_i_pv6_address.html#a8241f3707a508baf9c280b47f18e47f6",
"classts_1_1_linkage_descriptor_1_1_extended_event_linkage_info.html#a50c94c2d79e25d11933057fb0ef1f42f",
"classts_1_1_monotonic.html#a196517476beea4cd05590b23ff9d423f",
"classts_1_1_output_plugin.html#a2d0cf1aaf45079a08362b558dd7fcb20",
"classts_1_1_p_s_i_logger_args.html#af75f51a95fca8e126b6b254f2420dd36",
"classts_1_1_processor_plugin.html#a0b33c80c5d2b8832919db4056ad9b064",
"classts_1_1_report_file.html#a5ab2983600375f80aed003bab7369201",
"classts_1_1_s_s_u_data_broadcast_id_descriptor.html#a77fd80b304a38bdc350eae3d899495bc",
"classts_1_1_section_demux.html#aa71fd7117f35be69e3d02f001ad896e6",
"classts_1_1_service_list_descriptor.html#a082368ef5443867889659323c6842912",
"classts_1_1_stream_identifier_descriptor.html#aef9dabba2270e0ac6d4c43f13bb13243",
"classts_1_1_t_c_p_socket.html#a081fdffd4879395f7b5b360a481aa3c7",
"classts_1_1_t_s_analyzer_options.html#a1fcdb54618e29aed673a59af41f77409",
"classts_1_1_t_s_file_output_resync.html#ab3221ff0a09e4e83b38476733980acbf",
"classts_1_1_target_i_p_slash_descriptor.html#adbe5ac625d65123062037d7af5eb0b93",
"classts_1_1_teletext_charset.html#a1499709dcc5d22e91b3fbb5c7119bdff",
"classts_1_1_time.html#a14e379928d4f4e32907f854f9bcb11c4a2a678ca48f986af3bdef2ccc9b173491",
"classts_1_1_tuner_parameters_a_t_s_c.html#ae9090da5be9aa433810481bd8317ab10",
"classts_1_1_u_string.html#a449be4b2b6dd646f88ba339d68a328c2",
"classts_1_1_web_request.html#a0b120195c479efe48fc52c8a2d92165b",
"classts_1_1ecmgscs_1_1_channel_status.html#a6ccabcc11ed7bf412c3b07e053b6b7a0",
"classts_1_1emmgmux_1_1_channel_close.html#ab73b6c57c525121be55f5b5ece239c2d",
"classts_1_1emmgmux_1_1_stream_error.html#a0f42e1bbf8f339fa1290f00e3765b551",
"classts_1_1json_1_1_string.html#aa287df3fc3cd35b4fd4038160f4f98d0",
"classts_1_1tlv_1_1_stream_message.html#a78ad271b1ec5d64004a0de385020953b",
"classts_1_1tsp_1_1_output_executor.html",
"classts_1_1xml_1_1_comment.html#a3b6366eb4da43da62e4d82b2812df73d",
"classts_1_1xml_1_1_node.html#a5d192d19f818b55d1ed6de4befd7cb40",
"index.html",
"structts_1_1_p_i_d_operator.html#aafba614ee26baffa7a261af12427fa59",
"structts_1_1ecmgscs_1_1_tags.html#afd0406a41e496ef5d61e4ae3308e0f25a7c21828da3893516b5b38b1adf73813f",
"ts_dektec_input_plugin_8h.html",
"ts_m_p_e_g_8h.html#a320c39cb24c168ea784ed6cbf30c3d56a08dfaac329428c1431571ba028aaa3ea",
"ts_m_p_e_g_8h.html#a320c39cb24c168ea784ed6cbf30c3d56af4d04064001533408cdf256aa3cfd44c",
"ts_m_p_e_g_8h.html#ae6bc1afeeeb9ae9224d25d28e65ecfbaa345ac9d9e6639eb1711312dc55c91d03",
"ts_modulation_8h.html#ae4e82c198bc4395f3dc9368516da5b58a39b5f30493274003ec7111514318a8d1",
"ts_platform_8h.html#a8b72cb6e05cd166c8346ee6bbbb6b4d8",
"ts_t_s_packet_8h.html#ab772207b2b6d2c9383cf2ede5069ee5d",
"ts_u_char_8h.html#a2564508b22b9948c0ac75fde796994a5ad4502e87c2300188dd5ade68a3967bc3",
"ts_u_char_8h.html#a652bf889a957809981288ffbc239ad1f",
"ts_u_char_8h.html#ab5168e3da51c3b555ba79b6ff747bd9f",
"ts_u_char_8h.html#af7e4d7efdc52020c90082ff9b4cd4638"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
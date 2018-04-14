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
      ] ],
      [ "Installing in non-standard locations", "building.html#nonstdinst", null ]
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
"classts_1_1_a_v_c_sequence_parameter_set.html#ae94f8b3d9717e09807edff39dcbb61c8",
"classts_1_1_abstract_descrambler.html#abc95d267fd2cae08222ff09892af42b4",
"classts_1_1_application_shared_library.html#a0cb9572d8beca37387cf940c15f3c587",
"classts_1_1_args.html#ada57b307e21cd62d9eb7439dd2dcbfd1a890d4479bf50fff2d46e44fe74442375",
"classts_1_1_byte_block.html#a91012f959bab51616ba58f4cacb0d137",
"classts_1_1_c_t_s1.html#ac3bc8535776f3b6cf2874f65f5db615e",
"classts_1_1_component_descriptor.html#af23822edabeea1eb26fdd3c3bce59c84",
"classts_1_1_d_v_b_charset_1_1_invalid_d_v_b_charset.html",
"classts_1_1_dektec_input_plugin.html#a0547bf1ea95668127d5d2a7c9f82c08a",
"classts_1_1_descriptor_list.html#ad034c82b0bd236938eb79c29a625e78e",
"classts_1_1_enhanced_a_c3_descriptor.html#a656c83e401104eb45581a2867fe758dc",
"classts_1_1_h_e_v_c_video_descriptor.html#a419e6f9e2340b2acb1be86da1c0018b6",
"classts_1_1_i_pv6_address.html#a8051963386a26576ba9e1ae086c53eb4",
"classts_1_1_linkage_descriptor_1_1_extended_event_linkage_info.html#a31eb05731c84abcc15a3cd3a5d5c6b24",
"classts_1_1_monotonic.html#a00de10e3860104f7f7584f427895d64e",
"classts_1_1_output_plugin.html#a2a89ef77c252d85a09bcb1839af24678",
"classts_1_1_p_s_i_logger_args.html#ac1cae326a0ad6cf78cf336d007d17449",
"classts_1_1_processor_plugin.html#a0827b58f80f9ebe28cbcd4859d418403",
"classts_1_1_report_file.html#a596ac982beb3459f02a57dc802141297",
"classts_1_1_s_s_u_data_broadcast_id_descriptor.html#a68484783d6a0181c7d21177fceee9ca1",
"classts_1_1_section_demux.html#a96860d43f2cf1fa025d045ed9d000c4a",
"classts_1_1_service_list_descriptor.html",
"classts_1_1_stream_identifier_descriptor.html#ae6a4501c6f2fee77f0963de9d3c7392e",
"classts_1_1_t_c_p_socket.html#a035616a2efa7f3727864378de8c8a29b",
"classts_1_1_t_s_analyzer_options.html#a1ed06578f23947b14a76cac83523b2e5",
"classts_1_1_t_s_file_output_resync.html#a9277384dfc0237e618f0eb9dc241b20e",
"classts_1_1_target_i_p_slash_descriptor.html#abd94910a0f0e5a955d3450403a0e61d2",
"classts_1_1_teletext_charset.html",
"classts_1_1_time.html#a14e379928d4f4e32907f854f9bcb11c4a1b8ec369e3613cbfa9db82cde3ef90c4",
"classts_1_1_tuner_parameters_a_t_s_c.html#accc6a67ef21fd1edc8fc771d575ae0c2",
"classts_1_1_u_string.html#a40c75eda5c711a905f131a89713da584",
"classts_1_1_web_request.html",
"classts_1_1ecmgscs_1_1_channel_status.html#a6675a7e66ce8ec2262dd33c0c308d18a",
"classts_1_1emmgmux_1_1_channel_close.html#ab23956c5998a6d1052e94af1db69af39",
"classts_1_1emmgmux_1_1_stream_error.html#a06188d1081f8650f23d014cddaacab39",
"classts_1_1json_1_1_string.html#a8e6ba5dab8023d95764dfefb3f4c6016",
"classts_1_1tlv_1_1_stream_message.html#a7530fe6e8dd39892b63491ee49cb0ec1",
"classts_1_1tsp_1_1_options.html#af545c8bd5b837b2eb6f84418b7530413",
"classts_1_1xml_1_1_comment.html#a38755202c502d23ef2e4b2411bd6e6a6",
"classts_1_1xml_1_1_node.html#a5a851fe45f84aabed5dc34c570bf61c8",
"hierarchy.html",
"structts_1_1_p_i_d_operator.html#aaf9d1a1877427ab99041593dc69fc5a3",
"structts_1_1ecmgscs_1_1_tags.html#afd0406a41e496ef5d61e4ae3308e0f25a7996837e2494a432288ade606d9e0cf2",
"ts_dektec_control_8h.html",
"ts_m_p_e_g_8h.html#a320c39cb24c168ea784ed6cbf30c3d56a07e8026c101f61e01d9c23fe0b4ffa35",
"ts_m_p_e_g_8h.html#a320c39cb24c168ea784ed6cbf30c3d56af2f648264d4a0ea40419b6d81f690e6b",
"ts_m_p_e_g_8h.html#ae6bc1afeeeb9ae9224d25d28e65ecfbaa0b7411f58c6d969360a7c3e7105b224e",
"ts_modulation_8h.html#ae4e82c198bc4395f3dc9368516da5b58a0b582d43d238d99727c306ccad2d9a36",
"ts_platform_8h.html#a8a305fe98ef80b1759d8576b06f67c59",
"ts_t_s_packet_8h.html#a9eaa3bb4244d103e8504d07a98e7c6e7",
"ts_u_char_8h.html#a2564508b22b9948c0ac75fde796994a5ac83c0804d2f0df95577d4918b3f883f3",
"ts_u_char_8h.html#a64e0214114acf42b598d274316faa487",
"ts_u_char_8h.html#ab45352f96a461cebd187212edb47ce81",
"ts_u_char_8h.html#af7c27386a87b51c60d933abe62c8bb27"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
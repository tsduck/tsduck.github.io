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
    [ "Modules", "modules.html", "modules" ],
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
"classts_1_1_adaptation_field_data_descriptor.html#afa66b72c160f30afb1f643a2325ae19b",
"classts_1_1_args.html#a3f136b1c67fc9906e2e18c70702698e0",
"classts_1_1_bouquet_name_descriptor.html",
"classts_1_1_c_p_identifier_descriptor.html#a1aca8115129275bdd9c384e822301f0a",
"classts_1_1_cipher_chaining_template.html#aa0fd340d96eb6830df7d04260a261588",
"classts_1_1_d_t_v_properties.html#ad7bd0a1ae044c7d52b6c5e4b93e23d3a",
"classts_1_1_dektec_control.html#a7dfba204b3399f8ca6ed4ffed42c4603",
"classts_1_1_dektec_output_plugin.html#af06bf7b7fc5335c35385ca684cffbd02",
"classts_1_1_eacem_preferred_name_identifier_descriptor.html#a861d449ce53da7fdb3dd92135b91b022",
"classts_1_1_grid.html#ab63b3c359e079eb11ccbe03743071eb8",
"classts_1_1_i_p_m_a_c_platform_name_descriptor.html#ae5b592f7701b19d586a8b047b17d81b3",
"classts_1_1_input_redirector.html#a4b741d0184f3798f54304546e7e21064",
"classts_1_1_maximum_bitrate_descriptor.html#a77fd80b304a38bdc350eae3d899495bc",
"classts_1_1_n_i_t.html#a1d0aee64237d3bae60a8e94388ed3319",
"classts_1_1_output_plugin.html#ab0498e0500302521b85d8c319be0a5b1",
"classts_1_1_parental_rating_descriptor.html#ae3c088f8d26763cf2c4dc47042ee32e1",
"classts_1_1_processor_plugin.html#a73a29c6cec3e03b68a2a4c3dbf50e529",
"classts_1_1_report_with_prefix.html#a0b33c80c5d2b8832919db4056ad9b064",
"classts_1_1_s_s_u_linkage_descriptor.html#a67cf0c0307f5b667e50510ecadd18ae3",
"classts_1_1_section_file.html#ab59660f8e4caceb251d8f8685fba0a2f",
"classts_1_1_service_list_descriptor.html#a2039c886589fa10a8120ba325f5f8bdb",
"classts_1_1_splice_information_table.html#abf30166e376b87782e67e0ab99496886",
"classts_1_1_subtitling_descriptor.html#a9dba68b35ebe0ce0f66ec9a6c5a045a5",
"classts_1_1_t_d_e_s.html#ab6d62c145aa306d0fb3f0bcfd793823a",
"classts_1_1_t_s_analyzer_options.html#a7f5a626669225c1644e9a832f8d8f35f",
"classts_1_1_t_s_p.html#aa03cecf23b62013c9019ab06cfebcf87",
"classts_1_1_target_i_p_source_slash_descriptor.html#ae02743b0076183fb615027b8bc88b26a",
"classts_1_1_teletext_demux.html#ad90864c7e095a893ff00084b43ce83b4",
"classts_1_1_time.html#a97afccac9610e9093776991d305f7360",
"classts_1_1_tuner_parameters_bitrate_diff_d_v_b_t.html#ac93b1199fa89e01ef55e99279c0918b4",
"classts_1_1_u_string.html#a954c077cb499376b944878a196d40c02",
"classts_1_1duck_1_1_clear_e_c_m.html#a6ccabcc11ed7bf412c3b07e053b6b7a0",
"classts_1_1ecmgscs_1_1_channel_test.html#a59ed7cba78bbafd31bdcde155b7d49fe",
"classts_1_1emmgmux_1_1_channel_error.html#af16df1ae7cdfe64a68aa7914fd8aa2df",
"classts_1_1emmgmux_1_1_stream_setup.html#a479d3ae89696419c8d050e58a350aa06",
"classts_1_1json_1_1_true.html#af1611934e8b25fd47ea529c33c50cff3",
"classts_1_1tsp_1_1_input_executor.html#a2b83b8195aeb16fd769e8f41e8a94da7",
"classts_1_1tsp_1_1_output_executor.html#a6b5372f8211f26ced11cd926a237086b",
"classts_1_1xml_1_1_comment.html#aeabd1243390866d1c89d81b049fe15e1",
"classts_1_1xml_1_1_text.html#a1328e496f45df415ff27794b6991e04c",
"libtutorial.html#audiovideopes",
"structts_1_1_p_c_r_analyzer_1_1_status.html#ae72d51c7e9459b0dd4e92019153d1b1d",
"structts_1_1ecmgscs_1_1_tags.html#afd0406a41e496ef5d61e4ae3308e0f25a31335d492274d351e10074f7c861bd50",
"ts_d_v_b_charset_8h.html",
"ts_m_p_e_g_8h.html#a31d149e67bafccf62f288e7d480fb452a8784c141e8c5ba924a3b8905b79d7dea",
"ts_m_p_e_g_8h.html#a320c39cb24c168ea784ed6cbf30c3d56ae6bbe919c6a08c04d931e95e3b89a24c",
"ts_m_p_e_g_8h.html#ae6bc1afeeeb9ae9224d25d28e65ecfbaa43bbc0d543796c9947b0f6170b94bbaf",
"ts_modulation_8h.html#ae4e82c198bc4395f3dc9368516da5b58a3df3d7ca662bd00d744619d8b5f5b65a",
"ts_platform_8h.html#a88d4ec1b3fbdd3ff2d19f2c38b79499b",
"ts_t2_m_i_handler_interface_8h.html",
"ts_u_char_8h.html#a226693292a8f280734c094d5e4edea29",
"ts_u_char_8h.html#a608ce6187a574e9b4640f5653eda0acd",
"ts_u_char_8h.html#ab16fdcc81280af3db1283ed07f606419",
"ts_u_char_8h.html#af0ccb99d80cbc57ae743ad8abe808a4a"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
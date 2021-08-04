var endDate = new Date();
endDate.setMonth(endDate.getMonth() + 1);

function formatDate(date) {
    const d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}

var patnerData = [{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "tel-u.png",
    desk_perusahaan: "Telkom University or abbreviated as Tel-U, is a private tertiary institution in Indonesia.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Education, Research",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "TELKOM UNIVERSITY",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "https://telkomuniversity.ac.id"
},
{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "alltek.png",
    desk_perusahaan: "Alltek Singapore specialises in maritime and communication sectors in the South-East Asia region.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Reputable Device Manufacturer",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "ALLTEK",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "https://www.alltek.sg"
},
{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "everynet.png",
    desk_perusahaan: "EveryNet is Infrastructure provides with worldwide market.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Network Infrastructure Provider",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "EVERYNET",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "https://www.everynet.com"
},
{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "logoSINERGITEKNOLOGIUTAMA.jpg",
    desk_perusahaan: "Network & Monitoring Control device Power System System Integrator for telecommunication services & infrastucture.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Hardware, Software, Layanan, Solusi, System Integrator, Connectivity",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "PT. Sinergi Teknologi Utama",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://sinergiteknologi.com"
},
{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "logoNESYER.png",
    desk_perusahaan: `PT Nesyer Electronic is the company that brings forth customized Electronic and IT Solution for your company or project needs. <br/><br/>
    We are able to custom products which has not ready in the market, to make your products more advance in the market.`,
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Hardware, Software, Platform, Layanan, Solusi, System Integrator",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "Nesyer Electronic",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://www.nesyer.com"
},
{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "LogoSPC.png",
    desk_perusahaan: "A consulting and system integrator company that provides Engineering and Services for energy, petrochemical and manufacturing companies.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Software, Layanan, Solusi, Konsultan, System Integrator, Connectivity",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "PT. SCADA PRIMA CIPTA",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://scada.co.id"
},
{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "logoPINS.png",
    desk_perusahaan: "PINS Indonesia is a company dealing with the integration of devices and network supported by human resources capability and the best system. <br><br> As a team, we always focus on the development of innovation to meet customers’ need amid the volatile industry situation. <br><br>  We also fully focus on the company transformation in order to be able to win the competition to get the added value for our customers, employees and shareholders.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Hardware, Software, Platform, Layanan, Solusi, Konsultan, System Integrator, Edukasi, Research",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "PT PINS INDONESIA",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://www.pins.co.id"
},
{
    alamat_perusahaan: "",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "logoKERINCITAMA.png",
    desk_perusahaan: "Hardware manufacturer.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Hardware, Solusi, Konsultan, System Integrator, Research",
    kodepos: "",
    kota: "",
    nama_kontak: "",
    nama_perusahaan: "KERINCITAMA",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://kerincipro.id"
},
{
    alamat_perusahaan: "Jl. PHH Mutopa No. 39 Komplek Surapati Core Blok M-6 Kota Bandung",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "logoFUSI.png",
    desk_perusahaan: "Perdagangan Industri Manufaktur",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Hardware, Software",
    kodepos: "40192",
    kota: "Bandung",
    nama_kontak: "",
    nama_perusahaan: "PT. Fusi Global Teknologi",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "Jawa Barat",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://fusi.co.id"
},{
    alamat_perusahaan: "Gang Mawar Nomor 98D, RT 05/RW 22, jatiRejo, Sendangadi, Kec. Mlati, Kabupaten Sleman",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "logoWIT.png",
    desk_perusahaan: "Widya Imersif Teknologi is a company engaged in the field of Internet Of Things Solutions to provide services for consumer IoT.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Hardware, Software, Layanan, Solusi, Health IoT",
    kodepos: "55285",
    kota: "Sleman",
    nama_kontak: "",
    nama_perusahaan: "PT. Widya Imersif Teknologi",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "Daerah Istimewa Yogyakarta",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://widyaimersif.com"
},{
    alamat_perusahaan: "Komplek Gempol Sari Indah, Jl. Bougenville 7 No. 6",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "logoPENTARIUM.png",
    desk_perusahaan: "Kami merupakan perusahaan bergerak di bidang Hardware dan Software khususnya di bidang Internet of Things.",
    email_kontak: "",
    id_cmitra: 1,
    jabatan: "",
    kategori: "Hardware, Software, Solusi, Reasearch",
    kodepos: "40215",
    kota: "Bandung",
    nama_kontak: "",
    nama_perusahaan: "PT. Penta Digital Nusantara",
    no_tlpn_kontak: "",
    npwp_perusahaan: "",
    provinsi: "Jawa Barat",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://pentarium.id"
},{
    alamat_perusahaan: "Gedung Rektorat lantai 2, Kampus Unand Limau Manis Padang",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "unand.png",
    desk_perusahaan: "Universitas Andalas adalah sebuah perguruan negeri Indonesia yang terletak di kota Padang, Sumatera Barat, Indonesia. Universitas ini merupakan universitas tertrua di luar Pulau Jawa yang dibuka secara resmi pada tanggal 23 Desember 1995 oleh Wakil Presiden Mohammad Hatta.",
    email_kontak: "hanalde.andre@eng.unand.ac.id",
    id_cmitra: 1,
    jabatan: "Dosen Teknik Elektro",
    kategori: "Software, Layanan, Solusi, Konsultan, Edukasi, Research",
    kodepos: "25613",
    kota: "Padang",
    nama_kontak: "Hanalde Andre",
    nama_perusahaan: "Universitas Andalas",
    no_tlpn_kontak: "085263679508",
    npwp_perusahaan: "",
    provinsi: "Sumatera Barat",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "http://unand.ac.id"
},{
    alamat_perusahaan: "Jl. Sisingamangaraja No.4, Selong, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta",
    alasan_tolak: "",
    approvalby: "ibnualin@gmail.com",
    attach: "evomo.png",
    desk_perusahaan: "Solusi Monitoring IoT pada Manufacture (OEE, SixBigLoses), Agriculture, Livestock, Fishery. Top Startup Kementerian Perindustrian 2019.",
    email_kontak: "	hello@evomo.id",
    id_cmitra: 1,
    jabatan: "Marketing",
    kategori: "Software, Solusi, System Integrator",
    kodepos: "12110",
    kota: "Jakarta Selatan",
    nama_kontak: "Monaa",
    nama_perusahaan: "Evomo",
    no_tlpn_kontak: "+62 851-5850-0125",
    npwp_perusahaan: "",
    provinsi: "Jakarta",
    status: 1,
    tanggal: "",
    totalCount: 4,
    website: "https://evomo.id"
}]

Vue.com

var app = new Vue({
    el: '#app',
    data: {
        /*
        // local test
        base_url: 'http://localhost:3000/',
        base_url_image: 'http://localhost:3000/image/',
        // heroku test
        base_url: 'https://antareslandingpage.herokuapp.com/',
        base_url_image: 'https://antareslandingpage.herokuapp.com/image/',
        http://dev.antares.id:9090/image/tel-u.png
        */
        // dev test
        base_url: 'https://dev.antares.id:9090/',
        // base_url_image: 'https://dev.anteres.id:9090/image/',
        base_url_image: '/assets/img/',
        // patnerData: null,
        patnerData: patnerData
    },
    mounted() {
        var vm = this;
        // vm.getData()
        // console.log("vm ", vm)
    },
    methods: {
        linkRemover(text) {
            return text.replace(/(^\w+:|^)\/\//, '');
        },
        getData(e) {
            const vm = this
            // var url = "http://localhost:3000/api/getCalonMitraFilter"
            // var url = "https://antareslandingpage.herokuapp.com/api/getCalonMitraFilter";
            var url = vm.base_url + 'api/getCalonMitraFilter'
            var page = 1;
            e ? (page = e) : (page = 1);
            // this.items = dummyData
            var search = vm.filter ? vm.filter : "";
            var params = new FormData();
            params.append("page", page);
            params.append("limit", 100);
            params.append("search", search);
            params.append("status", 1);
            params.append("end_date", formatDate(endDate));
            params.append("start_date", '1970-06-15');

            for (const pair of params.entries()) {
                console.log(pair[0].toString() + ", " + pair[1].toString());
            }

            jQuery.ajax({
                url: url,
                data: params,
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST', // For jQuery < 1.9
                success: function (data) {
                    console.log("sucess", data);
                    vm.patnerData = data.data;
                    console.log("vm.patnerData ", vm.patnerData)
                },
                error: function (e) {
                    console.log("error", e);
                    vm.patnerData = [];
                }
            });
        }
    }
})

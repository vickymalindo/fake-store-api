import React from "react";
import BSI from '../../images/bsi.png'
import PCI from '../../images/pci.webp'
import TOKOPEDIA from '../../images/tokopedia.png'
import GPlay from '../../images/gplay.svg'
import APlay from '../../images/aplay.svg'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="mb-5">
            <hr className="mb-4"/>
            <div className="container mx-auto px-1 md:px-4 md:grid md:grid-cols-4 gap-2">
                <div className="">
                    <h5 className="font-semibold text-lg">Tokopaedi</h5>
                    <p className="hover:text-green-500">Tentang Tokopaedi</p>
                    <p className="hover:text-green-500">Hak Kekayaan Intelektual</p>
                    <p className="hover:text-green-500">Karir</p>
                    <p className="hover:text-green-500">Blog</p>
                    <p className="hover:text-green-500">Bridestory</p>
                    <h5 className="font-semibold text-lg mt-2">Beli</h5>
                    <p className="hover:text-green-500">Tagihan & Top Up</p>
                    <p className="hover:text-green-500">Tukar Tambah Handphone</p>
                    <p className="hover:text-green-500">Tokopaedi COD</p>
                </div>
                <div className="">
                    <h5 className="font-semibold text-lg">Jual</h5>
                    <p className="hover:text-green-500">Pusat Edukasi Seller</p>
                    <p className="hover:text-green-500">Mitra Toppers</p>
                    <p className="hover:text-green-500">Daftar Official Store</p>
                    <h5 className="font-semibold text-lg mt-2">Bantuan dan Panduan</h5>
                    <p className="hover:text-green-500">Tokopaedi Care</p>
                    <p className="hover:text-green-500">Syarat dan Ketentuan</p>
                    <p className="hover:text-green-500">Kebijakan Privasi</p>
                    <p className="hover:text-green-500">Mitra</p>
                    <h5 className="font-semibold text-lg mt-2">Keamanan & Privasi</h5>
                    <div className="flex gap-2 items-center">
                        <img src={BSI} alt="bsi" className="w-24 h-12"/>
                        <img src={PCI} alt="pci" className="w-23 h-12" />
                    </div>
                </div>
                <div className="mt-2 md:mt-0">
                    <h5 className="font-semibold text-lg">Ikuti Kami</h5>
                    <div className="flex gap-1">    
                        <FaFacebook className="text-blue-800 text-xl hover:scale-95"/>
                        <FaInstagramSquare className="text-pink-600 text-xl hover:scale-95"/>
                        <FaTwitter className="text-blue-600 text-xl hover:scale-95"/>
                        <FaPinterest className="text-red-600 text-xl hover:scale-95"/>
                    </div>
                </div>
                <div>
                    <img src={TOKOPEDIA} alt="" />
                    <div className="flex gap-2 items-center">
                        <img src={GPlay} alt="Plays Store" className="w-28 h-9"/>
                        <img src={APlay} alt="Apps Store" className="w-28 h-9"/>
                    </div>
                </div>
            </div>
            <h3 className="font-semibold text-center mt-2">© 2015 - 2022, PT. Tokopaedi.</h3>
        </div>
    )
}

export default Footer;
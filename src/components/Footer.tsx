import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <Image
                        src="/images/logo.png"
                        alt="Linchon & Newton Inc."
                        width={180}
                        height={50}
                        className="h-12 w-auto mb-4"
                    />
                    <p className="mb-4 max-w-sm">
                        Global leader in GenAI, Financial Infrastructure, and 51+ As-a-Service offerings.
                        Empowering the future of Unmanned Drive, IoT, and GovTech.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Corporate Office</h4>
                    <address className="not-italic text-sm space-y-2">
                        <p>306 Victoria House</p>
                        <p>Victoria Mahe, Seychelles</p>
                        <p className="mt-4 text-xs opacity-70">Company Reg No: 242968</p>
                        <p className="text-xs opacity-70">Inc Date: 2024 Aug 06</p>
                    </address>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <p className="text-sm mb-2">Corporate Inquiries Only.</p>
                    <a href="mailto:contact@linchon-newton.com" className="text-blue-500 hover:text-blue-400">
                        Send Secure Message
                    </a>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-900 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Linchon & Newton INC. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

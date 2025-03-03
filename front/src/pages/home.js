"use client"

import { useEffect, useState } from "react"
import { Leaf, Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Beautiful garden"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
        </div>
        <div
          className={`relative z-10 text-center text-white space-y-6 max-w-4xl px-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold">Transform Your Space</h1>
          <p className="text-xl md:text-2xl">Professional Gardening & Remodeling Services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gardening Card */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional Gardening</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Landscape Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Garden Maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Plant Selection & Care
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Remodeling Card */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Remodeling</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    Interior Renovation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    Kitchen & Bath Remodeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                    Custom Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">contact@example.com</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Working Hours</h3>
                <p className="text-gray-600">Mon - Sat: 8AM - 6PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


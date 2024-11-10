'use client'

import BlogList from '@/components/blog-list'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-28 sm:pt-32 md:pt-36 px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="relative mb-8 sm:mb-12 md:mb-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh]">
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
                alt="University Campus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto h-[30vh] sm:h-[40vh] md:h-[50vh] flex items-center">
            <div className="text-center w-full">
              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-3 sm:px-4 md:px-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="p-3 sm:p-4 md:p-6 bg-white/90 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 w-[80%] sm:w-full mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-lg sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      15k+
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">Students Placed</p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="p-3 sm:p-4 md:p-6 bg-white/90 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 w-[80%] sm:w-full mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-lg sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      50+
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">Universities</p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="p-3 sm:p-4 md:p-6 bg-white/90 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 w-[80%] sm:w-full mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  >
                    <h3 className="text-lg sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      25+
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">Countries</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="mt-6 sm:mt-8 md:mt-12">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <motion.h1
              className="text-xl sm:text-2xl md:text-4xl mb-3 sm:mb-4 text-gray-900 drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Latest Insights
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Explore success stories, university insights, and expert guidance
              for your international education journey.
            </motion.p>
          </div>
          <BlogList />
        </section>
      </motion.div>
    </main>
  )
}

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

          <div className="relative z-10 max-w-7xl mx-auto h-[35vh] sm:h-[40vh] md:h-[50vh] flex items-center mt-8 sm:mt-16 md:mt-24">
            <div className="text-center w-full">
              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-3 sm:px-4 md:px-6 -mt-8 sm:-mt-12 md:-mt-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* First Card */}
                <motion.div
                  className="p-1 sm:p-2 md:p-2 bg-white/90 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 w-[70%] sm:w-full mx-auto min-h-[60px] sm:min-h-[100px] md:min-h-[120px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="flex flex-row sm:flex-col items-center sm:justify-center h-full py-0.5 sm:py-2 gap-1.5 sm:gap-0 justify-center"
                  >
                    <h3 className="text-xs sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0 sm:mb-1">
                      15k+
                    </h3>
                    <p className="text-[10px] sm:text-sm md:text-base text-gray-700 font-medium">Students Placed</p>
                  </motion.div>
                </motion.div>

                {/* Second Card */}
                <motion.div
                  className="p-1 sm:p-2 md:p-2 bg-white/90 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 w-[70%] sm:w-full mx-auto min-h-[60px] sm:min-h-[100px] md:min-h-[120px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="flex flex-row sm:flex-col items-center sm:justify-center h-full py-0.5 sm:py-2 gap-1.5 sm:gap-0 justify-center"
                  >
                    <h3 className="text-xs sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0 sm:mb-1">
                      50+
                    </h3>
                    <p className="text-[10px] sm:text-sm md:text-base text-gray-700 font-medium">Universities</p>
                  </motion.div>
                </motion.div>

                {/* Third Card */}
                <motion.div
                  className="p-1 sm:p-2 md:p-2 bg-white/90 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 w-[70%] sm:w-full mx-auto min-h-[60px] sm:min-h-[100px] md:min-h-[120px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    className="flex flex-row sm:flex-col items-center sm:justify-center h-full py-0.5 sm:py-2 gap-1.5 sm:gap-0 justify-center"
                  >
                    <h3 className="text-xs sm:text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-0 sm:mb-1">
                      25+
                    </h3>
                    <p className="text-[10px] sm:text-sm md:text-base text-gray-700 font-medium">Countries</p>
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

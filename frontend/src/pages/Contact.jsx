import React from 'react'

const Contact = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p className="mb-4">Feel free to reach out to us using the form below:</p>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea className="w-full p-2 border rounded" placeholder="Your Message" rows="4" required></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  </div>

  )
}

export default Contact

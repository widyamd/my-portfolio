module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          text: '#383738',      
          background: '#f6f4f1',  
        }, 
        button: {
          DEFAULT: '#383738',  // Warna background tombol
          hover: '#2563eb',     // Warna background saat hover
          active: '#1e40af',    // Warna background saat ditekan
        },
      },
    },
  },
  plugins: [],
};


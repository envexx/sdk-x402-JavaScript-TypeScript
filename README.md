# x402 JavaScript/TypeScript SDK Documentation

Official documentation site for **x402 JavaScript/TypeScript SDK** - the ultimate toolkit for building payment-gated APIs on Solana.

## 🚀 About x402 SDK

Transform any API into a paid service in just 2 minutes with x402 SDK. Built for the Solana ecosystem with developer experience as the top priority.

### ⚡ Key Features

- **🚀 2-Minute Setup** - From installation to working payment-gated API
- **🌐 Multi-Framework** - Express.js, Next.js, Fastify, Hono support
- **🔒 Secure by Default** - Ed25519 signatures, nonce protection, replay attack prevention
- **💎 TypeScript First** - Full type safety and IntelliSense support
- **📦 NPM Ready** - Available on NPM registry for easy installation

### 🎯 Why Choose x402 SDK?

| Traditional Setup | x402 SDK |
|-------------------|----------|
| 30+ minutes setup | **2 minutes** |
| 200+ lines of code | **10-20 lines** |
| Single framework | **4 frameworks** |
| Manual security | **Built-in security** |
| Complex integration | **One-liner integration** |

## 🏗️ Documentation Site

This repository contains the complete documentation site built with Next.js and next-docs-ui.

### Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the documentation.

### Build

Build the documentation for production:

```bash
npm run build
```

### Deploy

The documentation is automatically deployed to Vercel when changes are pushed to the main branch.

## 📚 Documentation Structure

```
content/docs/
├── index.mdx              # Homepage
├── getting-started.mdx    # 2-minute setup guide
├── frameworks.mdx         # Framework integration guides
├── api-reference.mdx      # Complete API documentation
├── examples.mdx           # Real-world examples
└── meta.json             # Sidebar navigation structure
```

## 🌟 Features Documented

### Framework Support
- **Express.js** - Simple middleware integration
- **Next.js** - App Router and Pages Router support
- **Fastify** - Plugin-based architecture
- **Hono** - Edge computing and serverless support

### Core Features
- Payment verification with facilitator integration
- Multiple nonce storage options (memory, file, Redis)
- Ed25519 signature verification
- Configurable payment limits and timeouts
- Health monitoring and error handling
- Built-in testing utilities

## 🔗 Related Repositories

- **Main SDK**: [x402-js-sdk](https://github.com/envxx/x402-js-sdk) - The actual SDK packages
- **Examples**: Real-world implementation examples
- **Templates**: Starter templates for different frameworks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [next-docs-ui](https://next-docs-zeta.vercel.app)
- Powered by the Solana blockchain
- Created for the x402 protocol ecosystem

---

**Ready to transform your APIs?** [View Documentation →](https://sdk-x402-javascript-typescript.vercel.app)

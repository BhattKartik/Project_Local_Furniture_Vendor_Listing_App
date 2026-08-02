import React, { useState } from 'react'
import { Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react'

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  function handleInputChange(event) {
    const { name, value } = event.target
    setLoginData((currentData) => ({
      ...currentData,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitMessage('Sign-in will be available once authentication is connected.')
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-100">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-blue-700 flex items-center justify-center">
            <Lock className="text-white" size={26} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl font-serif font-bold text-slate-900 mb-1">Welcome</h1>
        <p className="text-center text-slate-500 mb-8">Please enter your details to sign in</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="text-slate-400 mr-2" size={18} />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="alex.smith@company.com"
                autoComplete="email"
                value={loginData.email}
                required
                onChange={handleInputChange}
                className="bg-transparent outline-none w-full text-slate-800"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-1">Password</label>
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="text-slate-400 mr-2" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="current-password"
                value={loginData.password}
                required
                onChange={handleInputChange}
                className="bg-transparent outline-none w-full text-slate-800"
              />
              <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((currentValue) => !currentValue)} className="text-slate-400 hover:text-slate-600">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((currentValue) => !currentValue)}
                className="w-4 h-4 rounded border-slate-300"
              />
              Remember me
            </label>
            <button type="button" disabled className="text-slate-400 font-medium cursor-not-allowed">Forgot password?</button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Sign In <ArrowRight size={18} />
          </button>

        </form>

        {submitMessage && <p role="status" className="mt-4 text-center text-sm text-slate-600">{submitMessage}</p>}

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400 font-medium tracking-wide">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3">
          <button type="button" disabled className="flex-1 flex items-center justify-center gap-2 border border-slate-200 bg-slate-100 rounded-lg py-2.5 font-medium text-slate-400 cursor-not-allowed">
            <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.93c1.71-1.57 2.69-3.88 2.69-6.64z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.93-2.27c-.81.54-1.85.86-3.03.86-2.33 0-4.3-1.57-5.01-3.68H.96v2.34C2.44 15.98 5.48 18 9 18z"/><path fill="#FBBC05" d="M3.99 10.71c-.18-.54-.28-1.11-.28-1.71s.1-1.17.28-1.71V4.95H.96C.35 6.17 0 7.55 0 9s.35 2.83.96 4.05l3.03-2.34z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.6-2.6C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.95l3.03 2.34C4.7 5.15 6.67 3.58 9 3.58z"/></svg>
            Google
          </button>
          <button type="button" disabled className="flex-1 flex items-center justify-center gap-2 border border-slate-200 bg-slate-100 rounded-lg py-2.5 font-medium text-slate-400 cursor-not-allowed">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.325C24 .6 23.4 0 22.675 0z"/></svg>
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account? <span className="text-slate-400 font-semibold">Sign up is coming soon.</span>
        </p>

      </div>

    </div>
  )
}

export default Login

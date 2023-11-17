import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { createClient } from '@supabase/supabase-js'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const supabase = createClient(
	'https://tebntzxcltsyopiezimk.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlYm50enhjbHRzeW9waWV6aW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNzY3OTQsImV4cCI6MjAxNTc1Mjc5NH0.uBJ3au8fF3HEsO_k1GDtTGMhueb_QVFwfC-fxt_X7CI'
)

root.render(<App />)

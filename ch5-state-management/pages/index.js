import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from '../components/Counter'

export default function Home() {
  return <Counter initialCount={1} />
}

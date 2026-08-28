import { useEffect, useRef } from 'react'

// Adds the `reveal` class treatment: fades/slides an element in
// once it scrolls into view. Respects prefers-reduced-motion via CSS.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

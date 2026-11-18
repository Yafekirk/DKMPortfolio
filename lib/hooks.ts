"use client";

import { useReducedMotion } from "motion/react";
import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function useIsClient() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}

export function usePrefersReducedMotion() {
  const reduceMotion = useReducedMotion();
  const isClient = useIsClient();

  return isClient ? Boolean(reduceMotion) : false;
}

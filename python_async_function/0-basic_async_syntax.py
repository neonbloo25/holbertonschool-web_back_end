#!/usr/bin/env python3
"""Asyncio ft Random"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Async: wait for a random delay between 0 and max_delay seconds, then return it."""

    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay

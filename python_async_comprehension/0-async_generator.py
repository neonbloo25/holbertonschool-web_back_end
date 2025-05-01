#!/usr/bin/env python3
"""Async generator module"""
import asyncio
import random

from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Yield a random float(0-10), 10 x 1 sec delay each"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

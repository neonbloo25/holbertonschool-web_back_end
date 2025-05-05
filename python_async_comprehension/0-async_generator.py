#!/usr/bin/env python3
"""This module contains an asynchronous generator
that yields random floats."""
import asyncio
import random

from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Asynchronously yields 10 random float numbers between
    0 and 10, each after a 1-second delay."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

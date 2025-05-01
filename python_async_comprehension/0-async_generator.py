#!/usr/bin/env python3
"""Async Generator"""
import asyncio
import random
from typing import AsyncGenerator


async def wait_and_generate() -> float:
    """Additional Function"""
    await asyncio.sleep(1)
    return random.uniform(0, 10)


async def async_generator() -> AsyncGenerator[float, None]:
    """Target Function"""
    for _ in range(10):
        yield await wait_and_generate()

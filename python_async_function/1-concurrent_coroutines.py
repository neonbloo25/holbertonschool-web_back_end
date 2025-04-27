#!/usr/bin/env python3
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Run wait_random n times concurrently and return delays"""
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]
    for coro in asyncio.as_completed(tasks):
        result = await coro
        delays.append(result)
    return delays

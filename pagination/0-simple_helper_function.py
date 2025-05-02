#!/usr/bin/env python3
"""Helper function to calculate index range for pagination."""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return start and end index for pagination."""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
